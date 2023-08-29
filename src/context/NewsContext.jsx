import { useState, createContext, useEffect } from "react";
import api from "../services/api.js";
import { setToken } from "../helpers/setToken.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const NewsContext = createContext();

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
      api.delete(`/news/${postId}`).then(() => {
        //toast.success("Notícia excluída com sucesso!");
        window.location.reload();
      });
    } catch (error) {
      toast.error(error);
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
          window.location.reload();
          //toast.success(res.data.message);
        } else {
          setUserLiked(false);
          window.location.reload();
          //toast.success(res.data.message);
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
      .then((res) => {
        console.log(res.data);
        toast.success("Comentário adicionado com sucesso!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

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
