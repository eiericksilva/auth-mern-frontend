import Navbar from "../../components/nav";
import Footer from "../../components/footer";

const Profile = () => {
  return (
    <div className="h-screen flex flex-col justify-between w-screen">
      <Navbar />
      <section className="border h-screen">
        <h1 className="">My personal data</h1>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
