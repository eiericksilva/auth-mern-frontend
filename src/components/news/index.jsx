import Button from "../button";
import TextLimit from "../textLimit";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
const News = ({
  className,
  id,
  keyProp,
  title,
  text,
  banner,
  username,
  commentQuantity,
  likeQuantity,
}) => {
  const { handleTrashNews, handleViewFullNews, likeNews } =
    useContext(NewsContext);
  const location = useLocation();
  const showDeleteIcon = location.pathname === "/profile";
  return (
    <div
      key={keyProp}
      className={`flex flex-col bg-slate-50 my-4 p-4 w-[49%] rounded-md gap-8 shadow-lg border border-slate-300 ${className}`}
    >
      <div className="flex gap-4 items-center">
        <div className="w-1/3">
          <img src={banner} />
        </div>
        <div className="w-2/3">
          <h1 className="text-2xl">{title}</h1>
          <TextLimit
            text={text}
            limit="150"
            className="text-sm max-h-28 overflow-y-hidden text-ellipsis"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>author: {username}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex w-1/5 justify-around">
          <div
            onClick={() => likeNews(id)}
            className="flex items-center gap-1 bg-slate-100 p-2 rounded-xl hover:bg-slate-200 hover:cursor-pointer"
          >
            <AiOutlineLike />
            {likeQuantity}
          </div>
          <div className="flex items-center gap-1 bg-slate-100 p-2 rounded-xl hover:bg-slate-200 hover:cursor-pointer">
            <AiOutlineComment /> {commentQuantity}
          </div>
          {showDeleteIcon && (
            <div className="flex items-center gap-1 bg-slate-100 p-2 rounded-xl hover:bg-slate-200 hover:cursor-pointer">
              <BsTrash
                onClick={() => handleTrashNews(id)}
                className="text-red-500"
              />
            </div>
          )}
        </div>
        <div>
          <Button onClick={() => handleViewFullNews(id)}>
            VEJA A NOTÍCIA COMPLETA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
