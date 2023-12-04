import "./PopupItem.css";
import React from "react";
import Popup from "../Popup/Popup";
import RecipeButton from "../RecipeButton/RecipeButton";
import { SelectedCardContext } from "../../contexts/SelectedCardContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function PopupItem({ onClose }) {
  const { selectedCard } = React.useContext(SelectedCardContext);
  const { isLoggedIn } = React.useContext(CurrentUserContext);

  const summary = selectedCard.summary;
  let regex = /<[^>]*>/g;

  const summaryString = summary.replaceAll(regex, "");

  return (
    <Popup>
      <div className="popup-item">
        <img
          src={selectedCard.image}
          alt={selectedCard.title}
          className="popup-item__image"
        ></img>
        <div className="popup-item__description-container">
          <h2 className="popup-item__title">{selectedCard.title}</h2>
          <p className="popup-item__description">{summaryString}</p>
          <h3 className="popup-item__ingredients-title">Ingredients</h3>
          <ul className="popup-item__ingredient-list">
            {selectedCard.analyzedInstructions[0]?.steps.flatMap(
              (step, stepIndex) =>
                step.ingredients.map((ingredient, index) => (
                  <li
                    key={`${stepIndex}-${index}-${ingredient.id}`}
                    className="popup-item__list-item"
                  >
                    {ingredient.name}
                  </li>
                ))
            )}
          </ul>
          <h3 className="popup-item__instructions-title">Instructions</h3>
          <ol className="popup-item__instructions-list">
            {selectedCard.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number} className="popup-item__list-item">
                {step.step}
              </li>
            ))}
          </ol>
        </div>
        <button
          className="popup__close-button popup__close-button_image"
          type="button"
          onClick={onClose}
        ></button>
        {isLoggedIn && <RecipeButton buttonName="popup-item" />}
      </div>
    </Popup>
  );
}

export default PopupItem;
