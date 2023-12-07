import "./Main.css";
import About from "../About/About";
import CardsContainer from "../CardsContainer/CardsContainer";

function Main({ handleShowMore }) {
  return (
    <div className="main">
      <section>
        <CardsContainer handleShowMore={handleShowMore} />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
}

export default Main;
