import "./ItemCard.css";
import React from "react";
import RecipeButton from "../RecipeButton/RecipeButton";
import { SelectedCardContext } from "../../contexts/SelectedCardContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, galleryName }) {
  const summary = item.summary;
  let regex = /<[^>]*>/g;

  const summaryString = summary.replaceAll(regex, "");

  const { handleCardPreview } = React.useContext(SelectedCardContext);
  const { isLoggedIn } = React.useContext(CurrentUserContext);

  const selectCard = (e) => {
    e.preventDefault();
    handleCardPreview(item);
  };

  const profileTempClick = (e) => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <li className="card">
      <div className="card__image-container">
        <img className="card__image" src={item.image} alt={item.title} />
        {galleryName === "profile" ? (
          <div className="card__image-overlay" onClick={profileTempClick}></div>
        ) : (
          <div className="card__image-overlay" onClick={selectCard}></div>
        )}
      </div>

      <div className="card__footer">
        <h2 className="card__title">{item.title}</h2>
        <p className="card__description">{summaryString}</p>
        <h3 className="card__source">{item.sourceName}</h3>
      </div>
      {isLoggedIn && galleryName === "home" && (
        <RecipeButton buttonName="card" />
      )}

      {galleryName === "profile" && <RecipeButton buttonName="card-delete" />}
    </li>
  );
}

export default ItemCard;
