import "./Main.css";
import About from "../About/About";
import CardsContainer from "../CardsContainer/CardsContainer";

function Main({ handleShowMore }) {
  return (
    <section className="main">
      <CardsContainer handleShowMore={handleShowMore} />
      <About />
    </section>
  );
}

export default Main;
