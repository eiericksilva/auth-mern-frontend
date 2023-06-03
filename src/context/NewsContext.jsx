import { useState, createContext, useEffect } from "react";
import api from "../services/api.js";
const NewsContext = createContext();
import { setToken } from "../helpers/setToken.js";
import { useNavigate } from "react-router-dom";

const NewsProvider = ({ children }) => {
  const navigate = useNavigate();
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

  const handleViewFullNews = (postId) => {
    navigate(`/news/${postId}`);
  };

  const likeNews = async (postId) => {
    setToken();
    api
      .patch(`/news/like/${postId}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getTopNews();
    getNews();
  }, [news]);

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
        handleViewFullNews,
        likeNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
