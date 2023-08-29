import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { setToken } from "../../helpers/setToken";
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { NewsContext } from "../../context/NewsContext";
import { UserContext } from "../../context/UserContext";
import { BsTrash } from "react-icons/bs";

const NewsDetails = () => {
  const { likeNews, addCommentNews, deleteCommentNews } =
    useContext(NewsContext);
  const { user } = useContext(UserContext);
  const [news, setNews] = useState();
  const [comment, setComment] = useState("");
  const [commentBoxIsOpen, setCommentBoxIsOpen] = useState(false);
  let id = "";
  const location = useLocation();
  id = location.pathname.split("/").pop();

  const getNewsByPostId = async (postId) => {
    setToken();
    api
      .get(`/news/${postId}`)
      .then((res) => setNews(res.data.news))
      .catch((error) => console.log(error));
  };

  const commentNews = async (e) => {
    e.preventDefault();

    addCommentNews(id, { comment });
    setComment("");
    setCommentBoxIsOpen(false);

    window.location.reload();
  };

  useEffect(() => {
    getNewsByPostId(id);
  }, []);

  return (
    <div>
      {news ? (
        <main className="min-h-screen w-4/5 m-auto">
          <section>
            <div className="bg-white p-8 rounded-xl my-4">
              <header>
                <h1 className="text-5xl mb-4">{news.title}</h1>
                <div>
                  <p className="text-slate-400">
                    By <>{news.username}</>
                  </p>
                </div>
              </header>
              <div>
                <img className="py-8 mx-auto" src={news.banner} alt="" />
              </div>
              <div>
                <p className="text-xl font-thin">{news.text}</p>
              </div>
              <div className="flex gap-8 mt-10">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setCommentBoxIsOpen(!commentBoxIsOpen)}
                >
                  <AiOutlineComment />
                  <span>{`Comentários (${news.comments.length})`}</span>
                </div>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => likeNews(id)}
                >
                  <AiOutlineLike />
                  <span>{`Likes (${news.likes.length})`}</span>
                </div>
              </div>
              {commentBoxIsOpen && (
                <div className="">
                  <input
                    placeholder="Digite seu comentário aqui"
                    type="text"
                    className="w-full rounded-3xl rounded-tl-none bg-slate-200 outline-slate-300 h-24 my-4 p-4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button
                    className="bg-slate-500 text-slate-50 p-4 rounded-lg"
                    onClick={commentNews}
                  >
                    Enviar Comentário
                  </button>
                </div>
              )}
            </div>
            <h1 className="text-3xl">Comentários dos usuários</h1>
            {news.comments &&
              news.comments.map((comment) => (
                <div
                  key={comment.commentId}
                  className="flex justify-between bg-slate-100 min-h-[100px] p-4 my-4 rounded-xl border items-center"
                >
                  <div className="flex flex-col space-y-8">
                    <span className="text-slate-400">{comment.username}</span>
                    <div>{comment.comment}</div>
                  </div>
                  {user.user._id === comment.userId && (
                    <div className="flex flex-col items-center gap-4">
                      <BsTrash
                        className="cursor-pointer"
                        onClick={() => {
                          deleteCommentNews(news.postId, comment.commentId);
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
          </section>
        </main>
      ) : (
        <p>Loading News</p>
      )}
    </div>
  );
};

export default NewsDetails;
