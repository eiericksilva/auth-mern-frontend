import { useState, createContext, useEffect } from "react";
import api from "../services/api.js";
const NewsContext = createContext();
import { setToken } from "../helpers/setToken.js";

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState(null);

  const getNews = async () => {
    api
      .get("/news")
      .then((res) => setNews(res.data.results))
      .catch((error) => console.log(error));
  };

  const getTopNews = async () => {
    api
      .get("/news/top")
      .then((res) => setTopNews(res.data))
      .catch((error) => console.log(error));
  };

  const handleTrashNews = async (postId) => {
    setToken();
    api
      .delete(`/news/${postId}`)
      .then((res) => console.log(res.data.message))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTopNews();
    getNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        topNews,
        setNews,
        setTopNews,
        getTopNews,
        getNews,
        handleTrashNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
