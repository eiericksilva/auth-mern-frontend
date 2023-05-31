import Button from "../button";
import TextLimit from "../textLimit";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
const News = ({
  keyProp,
  title,
  text,
  banner,
  username,
  commentQuantity,
  likeQuantity,
}) => {
  return (
    <div
      key={keyProp}
      className="flex flex-col bg-white my-4 p-4 w-[49%] rounded-md gap-8 shadow-lg"
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
            onClick={() => console.log("like")}
            className="flex items-center gap-1 bg-slate-100 p-2 rounded-xl hover:bg-slate-200 hover:cursor-pointer"
          >
            <AiOutlineLike /> {likeQuantity}
          </div>
          <div className="flex items-center gap-1 bg-slate-100 p-2 rounded-xl hover:bg-slate-200 hover:cursor-pointer">
            <AiOutlineComment /> {commentQuantity}
          </div>
        </div>
        <div>
          <Button>VEJA A NOTÍCIA COMPLETA</Button>
        </div>
      </div>
    </div>
  );
};

export default News;