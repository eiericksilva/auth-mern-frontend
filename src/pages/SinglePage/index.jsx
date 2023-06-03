import Footer from "../../components/footer";
import Navbar from "../../components/nav";
import NewsDetails from "../../components/newsDetails";

const SinglePage = () => {
  return (
    <div className="h-screen flex flex-col justify-between w-screen overflow-x-hidden">
      <Navbar />
      <div>
        <NewsDetails />
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
