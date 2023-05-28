import TextLimit from "../textLimit";
const News = ({ key, title, text, banner, comments, username }) => {
  return (
    <div
      key={key}
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
        <button className="text-sm bg-green-700 text-white w-1/3 h-12 rounded-lg">
          VEJA A NOTÍCIA COMPLETA
        </button>
      </div>
    </div>
  );
};

export default News;
