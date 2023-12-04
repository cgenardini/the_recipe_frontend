import "./RecipeButton.css";

function RecipeButton({ buttonName }) {
  return (
    <button
      className={`recipe-button recipe-button_type_${buttonName}`}
      type="button"
    ></button>
  );
}
export default RecipeButton;
