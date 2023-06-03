import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { setToken } from "../../helpers/setToken";

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
  };

  useEffect(() => {
    getNewsByPostId(id);
  }, []);
  return (
    <div>
      {news ? (
        <main className="min-h-screen w-4/5 m-auto">
          <header>
            <h1 className="text-6xl">{news.title}</h1>
            <div>
              <p>
                By <>{news.username}</>
              </p>
            </div>
          </header>
          <section>
            <div>
              <img src={news.banner} alt="" />
            </div>
            <div>
              <p>{news.text}</p>
            </div>
            <div className="flex gap-2">
              <p>Icon Like X </p>
              <p>Icon Comments Y</p>
            </div>
            <button className="bg-slate-400 p-4">Fazer um comentário</button>
          </section>
        </main>
      ) : (
        <p>Loading News</p>
      )}
    </div>
  );
};

export default NewsDetails;
