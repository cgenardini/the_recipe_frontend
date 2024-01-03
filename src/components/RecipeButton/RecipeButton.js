import "./RecipeButton.css";

function RecipeButton({ buttonName, onClick }) {
  return (
    <button
      className={`recipe-button recipe-button_type_${buttonName}`}
      type="button"
      onClick={onClick}
    ></button>
  );
}
export default RecipeButton;
