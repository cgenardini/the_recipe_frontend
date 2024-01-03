import "./ItemCard.css";
import React from "react";
import RecipeButton from "../RecipeButton/RecipeButton";
import { SelectedCardContext } from "../../contexts/SelectedCardContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, galleryName }) {
  const summary = item.summary;
  let regex = /<[^>]*>/g;

  const summaryString = summary.replaceAll(regex, "");

  const { handleCardPreview, handleSaveRecipeCard, handleRemoveRecipeCard } =
    React.useContext(SelectedCardContext);
  const { isLoggedIn } = React.useContext(CurrentUserContext);
  const [isClicked, setIsClicked] = React.useState(false);

  const selectCard = (e) => {
    e.preventDefault();
    handleCardPreview(item);
  };

  const handleSaveAndDelete = (e) => {
    e.preventDefault();
    if (isClicked === false) {
      setIsClicked(true);
      handleSaveRecipeCard(item.id);
    }
    if (isClicked === true) {
      setIsClicked(false);
      handleRemoveRecipeCard(item.id);
    }
  };

  const handleDeleteFromProfile = (e) => {
    e.preventDefault();
    handleRemoveRecipeCard(item.recipeId);
  };

  return (
    <li className="card">
      <div className="card__image-container">
        <img className="card__image" src={item.image} alt={item.title} />
        {galleryName === "profile" ? (
          <div className="card__image-overlay" onClick={selectCard}></div>
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
        <RecipeButton
          buttonName={isClicked ? "card-delete" : "card"}
          onClick={handleSaveAndDelete}
        />
      )}

      {galleryName === "profile" && (
        <RecipeButton
          buttonName={isClicked ? "card-delete_clicked" : "card-delete"}
          onClick={handleDeleteFromProfile}
        />
      )}
    </li>
  );
}

export default ItemCard;
