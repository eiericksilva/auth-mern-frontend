import { useState, createContext, useEffect } from "react";
import api from "../services/api.js";
const NewsContext = createContext();
import { setToken } from "../helpers/setToken.js";
import { useNavigate } from "react-router-dom";

const NewsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [topNews, setTopNews] = useState(null);
  const [userLiked, setUserLiked] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = () => {
    if (!nextUrl || loadingMore) {
      return;
    }
    setLoadingMore(true);

    try {
      getNews();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMore(false);
    }
  };

  const getNews = async () => {
    api
      .get(nextUrl || "/news")
      .then((res) => {
        console.log("getNews Acionado");
        setNews([...news, ...res.data.results]);
        setNextUrl(res.data.nextUrl);
      })
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
      .then((res) => {
        if (res.data.userLiked === true) {
          setUserLiked(true);
        } else {
          setUserLiked(false);
        }
        console.log(res.data);
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
      .then((res) => console.log(res.data))
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
        loadingMore,
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
        handleLoadMore,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
