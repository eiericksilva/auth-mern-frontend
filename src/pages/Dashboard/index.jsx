import Navbar from "../../components/nav";
import News from "../../components/news";
import TopNews from "../../components/topNews";
import api from "../../services/api";
import { useState, useEffect } from "react";
const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState(null);
  useEffect(() => {
    getTopNews();
    getNews();
  }, []);

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

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <header className="flex flex-col items-center justify-around mx-8">
        {topNews ? (
          <TopNews
            title={topNews.title}
            text={topNews.text}
            banner={topNews.banner}
            username={topNews.username}
          />
        ) : (
          <span>Loading news...</span>
        )}
      </header>
      <main className="flex mx-8 flex-wrap justify-between">
        {news.map((item) => (
          <News
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            comments={item.comments}
            username={item.username}
          />
        ))}
      </main>
      <footer>
        <p>Criado por @eiericksilva.dev</p>
      </footer>
    </div>
  );
};

export default Dashboard;
