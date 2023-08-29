import { useState, createContext, useEffect } from "react";
import api from "../services/api.js";
import { setToken } from "../helpers/setToken.js";
import { useNavigate } from "react-router-dom";
const NewsContext = createContext();

// eslint-disable-next-line react/prop-types
const NewsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userLiked, setUserLiked] = useState(false);

  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState(null);

  const getNews = async () => {
    try {
      const response = await api.get("/news");
      setNews(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopNews = async () => {
    api
      .get("/news/top")
      .then((res) => setTopNews(res.data))
      .catch((error) => console.log(error));
  };

  const handleTrashNews = async (postId) => {
    setToken();

    try {
      api.delete(`/news/${postId}`).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewFullNews = (postId) => {
    navigate(`/news/${postId}`);
  };

  const likeNews = async (postId) => {
    setToken();
    api
      .patch(`/news/like/${postId}`)
      .then((res) => {
        if (res.data.userLiked === true) {
          setUserLiked(true);
        } else {
          setUserLiked(false);
        }
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => console.log(error.message));
  };
  const addCommentNews = async (postId, comment) => {
    setToken();
    api
      .patch(`/news/comment/${postId}`, comment)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const deleteCommentNews = async (postId, commentId) => {
    setToken();
    api
      .patch(`/news/comment/${postId}/${commentId}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
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
        userLiked,
        setNews,
        setTopNews,
        getTopNews,
        getNews,
        handleTrashNews,
        handleViewFullNews,
        likeNews,
        addCommentNews,
        deleteCommentNews,
        setUserLiked,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
