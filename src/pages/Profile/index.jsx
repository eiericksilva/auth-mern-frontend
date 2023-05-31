import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { setToken } from "../../helpers/setToken";
import News from "../../components/news";

const Profile = () => {
  const { user } = useContext(UserContext);
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
  }, []);
  return (
    <div className="h-screen flex flex-col justify-between w-screen">
      <Navbar />
      <section className="">
        <h1 className="">My personal data</h1>
        <h1 className="">My Posts</h1>
        <ul>
          {personalNews &&
            personalNews.map((item) => (
              <News
                key={item.id}
                title={item.title}
                text={item.text}
                banner={item.banner}
                username={item.username}
                commentQuantity={item.comments.length}
                likeQuantity={item.likes.length}
              />
            ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
