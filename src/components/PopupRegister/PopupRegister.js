import "./PopupRegister.css";
import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function PopupRegister({ onClose, buttonText, handleRegister }) {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  };

  const handleChange = (e) => {
    const { name, value, validity, validationMessage } = e.target;
    setValues({ ...values, [name]: value });

    let errorMessage = validity.valid ? "" : validationMessage;

    setErrors({ ...errors, [name]: errorMessage });
  };

  return (
    <PopupWithForm
      onClose={onClose}
      formTitle="Sign Up"
      buttonText={buttonText}
      popupName="register"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup-form__fieldset">
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Email</h3>
          <input
            className="popup-form__input"
            type="email"
            name="email"
            placeholder="Email"
            minLength="1"
            required
            value={values.email}
            onChange={handleChange}
          />
          <span className="popup-form__error popup-form__error_signup-email">
            {errors.email}
          </span>
        </label>
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Password</h3>
          <input
            className="popup-form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={values.password}
            onChange={handleChange}
          />
          <span className="popup-form__error popup-form__error_signup-password">
            {errors.password}
          </span>
        </label>
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Name</h3>
          <input
            className="popup-form__input"
            type="text"
            name="name"
            placeholder="Name"
            minLength="2"
            maxLength="30"
            required
            value={values.name}
            onChange={handleChange}
          />
          <span className="popup-form__error popup-form__error_signup-name">
            {errors.name}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default PopupRegister;
