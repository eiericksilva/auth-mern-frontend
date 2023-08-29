import Navbar from "../../components/nav";
import News from "../../components/news";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import Footer from "../../components/footer";

const Dashboard = () => {
  const { topNews, news } = useContext(NewsContext);

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <header className="flex flex-col items-center justify-around mx-8">
        {topNews ? (
          <News
            id={topNews.postId}
            key={topNews.postId}
            title={topNews.title}
            text={topNews.text}
            banner={topNews.banner}
            username={topNews.username}
            commentQuantity={topNews.comments.length}
            likeQuantity={topNews.likes.length}
            className="w-full"
          />
        ) : (
          <span>Loading news...</span>
        )}
      </header>
      <main className="flex mx-8 flex-wrap justify-between">
        {news &&
          news.map((item) => (
            <News
              id={item.id}
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              username={item.username}
              commentQuantity={item.comments.length}
              likeQuantity={item.likes.length}
            />
          ))}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
