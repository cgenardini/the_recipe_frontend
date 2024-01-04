import "./ItemCard.css";
import React from "react";
import RecipeButton from "../RecipeButton/RecipeButton";
import { SelectedCardContext } from "../../contexts/SelectedCardContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { flushSync } from "react-dom";
import { useEffect } from "react";

function ItemCard({ item, galleryName }) {
  const summary = item.summary;
  let regex = /<[^>]*>/g;

  const summaryString = summary.replaceAll(regex, "");

  const { handleCardPreview, handleSaveRecipeCard, handleRemoveRecipeCard } =
    React.useContext(SelectedCardContext);
  const { isLoggedIn, currentUser } = React.useContext(CurrentUserContext);

  const owners = item.owners;
  const isOwn = owners.includes(currentUser._id);
  const [isClicked, setIsClicked] = React.useState(isOwn);
  const selectCard = (e) => {
    e.preventDefault();
    handleCardPreview(item);
  };

  React.useEffect(() => {
    setIsClicked(isOwn);
  }, [isOwn]);

  // const handleSaveAndDelete = (e) => {
  //   e.preventDefault();
  //   if (isClicked === false) {
  //     setIsClicked(true);
  //     console.log(owners);
  //     handleSaveRecipeCard(item.recipeId);
  //   }
  //   if (isClicked === true) {
  //     setIsClicked(false);
  //     console.log(owners);
  //     handleRemoveRecipeCard(item.recipeId);
  //   }
  // };

  // const handleDeleteFromProfile = (e) => {
  //   e.preventDefault();
  //   handleRemoveRecipeCard(item.recipeId);
  // };

  const handleSave = (e) => {
    if (!isClicked) {
      e.preventDefault();
      handleSaveRecipeCard(item.recipeId);
      setIsClicked(true);
    }
  };
  const handleDelete = (e) => {
    if (isClicked) {
      e.preventDefault();
      handleRemoveRecipeCard(item.recipeId);
      setIsClicked(false);
    }
  };

  const renderButton = () => {
    if (isLoggedIn) {
      const buttonName = isClicked ? "card-delete" : "card";
      const onClick = isClicked ? handleDelete : handleSave;

      return <RecipeButton onClick={onClick} buttonName={buttonName} />;
    }
    return;
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

      {renderButton()}
    </li>
  );
}

export default ItemCard;
