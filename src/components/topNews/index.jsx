const TopNews = ({ title, text, banner, username }) => {
  return (
    <div className="bg-white rounded-md p-4 py-16 flex flex-col gap-2 shadow-lg">
      <div className="flex gap-8 items-center">
        <div className="w-1/3">
          <img className="rounded-md" src={banner} alt="" />
        </div>
        <div className="flex flex-col w-2/3">
          <h1 className="text-4xl">{title}</h1>
          <p className="max-h-28 overflow-y-hidden text-ellipsis">{text}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>author: {username}</p>
        <button className="bg-green-700 text-white w-1/3 h-12 rounded-lg">
          VEJA A NOTÍCIA COMPLETA
        </button>
      </div>
    </div>
  );
};

export default TopNews;
