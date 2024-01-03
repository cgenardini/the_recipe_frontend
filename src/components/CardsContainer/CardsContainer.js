import "./CardsContainer.css";
import React from "react";

import CardsGallery from "../CardsGallery/CardsGallery";
import { CurrentSearchCards } from "../../contexts/CurrentSearchCards";

function CardsContainer({ handleShowMore }) {
  const {
    displayedCards,
    searchActive,
    searchSuccessful,
    currentSearchCards,
    initialCardIndex,
  } = React.useContext(CurrentSearchCards);

  return (
    <section className="cards-container">
      {searchActive ? (
        <>
          <h2 className="cards-container__header">Search Results</h2>
          {searchSuccessful ? (
            <>
              <CardsGallery cards={displayedCards} galleryName="home" />
              {initialCardIndex < currentSearchCards.length && (
                <button
                  type="button"
                  className="cards-container__show-more"
                  onClick={handleShowMore}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            <p className="cards-container__nothing-found">Nothing Found</p>
          )}
        </>
      ) : (
        <></>
      )}
    </section>
  );
}

export default CardsContainer;
