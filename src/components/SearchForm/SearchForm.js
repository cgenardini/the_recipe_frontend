import "./SearchForm.css";
import React from "react";

function SearchForm({ handleRecipeSearch }) {
  const [values, setValues] = React.useState({
    search: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRecipeSearch(values.search);
    setValues({ search: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        name="search"
        required
        placeholder="pasta, vegetarian, healthy, etc..."
        value={values.search}
        onChange={handleChange}
      ></input>
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
