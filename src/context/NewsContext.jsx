import { useState, createContext, useEffect } from "react";
import api from "../services/api.js";
import { setToken } from "../helpers/setToken.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userLiked, setUserLiked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState(null);

  async function getNews() {
    try {
      setIsLoading(true);
      const response = await api.get("/news");
      setNews(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getTopNews() {
    try {
      setIsLoading(true);
      const res = await api.get("/news/top");
      setTopNews(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleTrashNews(postId) {
    setToken();

    try {
      api.delete(`/news/${postId}`).then(() => {
        //toast.success("Notícia excluída com sucesso!");
        window.location.reload();
      });
    } catch (error) {
      toast.error(error);
    }
  }

  function handleViewFullNews(postId) {
    navigate(`/news/${postId}`);
  }

  async function likeNews(postId) {
    setToken();
    try {
      const res = await api.patch(`/news/like/${postId}`);
      if (res.data.userLiked === true) {
        setUserLiked(true);
        window.location.reload();
        //toast.success(res.data.message);
      }
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function addCommentNews(postId, comment) {
    setToken();
    try {
      const res = await api.patch(`/news/comment/${postId}`, comment);
      console.log(res);
      window.location.reload();
      //toast.success("Comentário adicionado com sucesso!");
    } catch (error) {
      console.log(error);
      //toast.error(error);
    }
  }

  const deleteCommentNews = async (postId, commentId) => {
    setToken();
    api
      .patch(`/news/comment/${postId}/${commentId}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
        //toast.success("Comentário removido com sucesso!");
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
        isLoading,
        setIsLoading,
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
