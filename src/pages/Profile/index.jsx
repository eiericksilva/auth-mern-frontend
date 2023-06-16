import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import api from "../../services/api";
import { setToken } from "../../helpers/setToken";
import News from "../../components/news";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BsFillPersonFill, BsFillJournalBookmarkFill } from "react-icons/bs";

const Profile = () => {
  const [personalNews, setPersonalNews] = useState([]);
  const { user } = useContext(UserContext);

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
    <div className="h-screen flex flex-col justify-between w-screen overflow-x-hidden">
      <Navbar />
      <section className="px-4 flex flex-col gap-4">
        {user && (
          <div className="bg-white p-4 shadow-md">
            <h1 className="mb-4 flex items-center gap-2">
              <BsFillPersonFill /> My personal data
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                Id do usuário:
                <span className="text-slate-400">{user.user._id}</span>
              </p>
              <p>
                Nome do usuário:
                <span className="text-slate-400">{user.user.username}</span>
              </p>
              <p>
                Email do usuário:
                <span className="text-slate-400">{user.user.email}</span>
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col p-4 flex-wrap gap-1 bg-white shadow-md mb-4">
          <h1 className="mb-4 flex items-center gap-2">
            <BsFillJournalBookmarkFill />
            My Posts
          </h1>
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
