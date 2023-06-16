import { useState, createContext, useEffect, useCallback } from "react";
import api from "../services/api.js";
import { setToken } from "../helpers/setToken.js";
import { useNavigate } from "react-router-dom";
const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [nextUrl, setNextUrl] = useState(null);
  const [userLiked, setUserLiked] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState(null);

  const getNews = useCallback(async () => {
    api
      .get(nextUrl || "/news")
      .then((res) => {
        setNews([...news, ...res.data.results]);
        setNextUrl(res.data.nextUrl);
      })
      .catch((error) => console.log(error));
  }, []);

  const getTopNews = async () => {
    api
      .get("/news/top")
      .then((res) => setTopNews(res.data))
      .catch((error) => console.log(error));
  };

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
  }, [getNews]);

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
