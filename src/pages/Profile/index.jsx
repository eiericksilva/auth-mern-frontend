import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import api from "../../services/api";
import { setToken } from "../../helpers/setToken";
import News from "../../components/news";
import { useEffect, useState } from "react";

const Profile = () => {
  const [personalNews, setPersonalNews] = useState([]);

  const getNewsByUser = async () => {
    api
      .get("/news/newsbyuser")
      .then((res) => setPersonalNews(res.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setToken();
    getNewsByUser();
  }, [personalNews]);

  return (
    <div className="h-screen flex flex-col justify-between w-screen overflow-x-hidden">
      <Navbar />
      <section className="px-4">
        <h1>My personal data</h1>
        <h1>My Posts</h1>
        <div className="flex flex-wrap gap-1">
          {personalNews &&
            personalNews.map((item) => (
              <News
                id={item.postId}
                key={item.postId}
                title={item.title}
                text={item.text}
                banner={item.banner}
                username={item.username}
                commentQuantity={item.comments.length}
                likeQuantity={item.likes.length}
              />
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
