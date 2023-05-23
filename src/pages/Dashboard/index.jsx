import Header from "../../components/header";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <section className="flex flex-col items-center justify-around md:flex-row"></section>
      <footer>
        <p>Criado por @eiericksilva.dev</p>
      </footer>
    </div>
  );
};

export default Dashboard;
