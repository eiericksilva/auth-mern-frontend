import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { setToken } from "../../helpers/setToken";
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";

const NewsDetails = () => {
  const [news, setNews] = useState();
  let id = "";
  const location = useLocation();
  id = location.pathname.split("/").pop();
  console.log(id);

  const getNewsByPostId = async (postId) => {
    setToken();
    api
      .get(`/news/${postId}`)
      .then((res) => setNews(res.data.news))
      .catch((error) => console.log(error));
    console.log("news:", news);
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
                <div className="flex items-center gap-1">
                  <AiOutlineComment />
                  <span>{`Comentários (${news.comments.length})`}</span>
                </div>
                <div className="flex items-center gap-1">
                  <AiOutlineLike />
                  <span>{`Likes (${news.likes.length})`}</span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl">Comentários dos usuários</h1>
            {news.comments &&
              news.comments.map((comment) => (
                <div
                  key={comment.commentId}
                  className="flex justify-between bg-slate-300 min-h-[70px] p-4 my-4 rounded-xl border items-center"
                >
                  <div>{comment.comment}</div>
                  <p className="text-slate-400"> author: {comment.userId}</p>
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
