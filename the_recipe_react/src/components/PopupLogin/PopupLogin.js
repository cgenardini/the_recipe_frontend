import React from "react";
import "./PopupLogin.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "../PopupWithForm/PopupWithForm.css";

function PopupLogin({ buttonText, onClose, handleLogin }) {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  const handleChange = (e) => {
    const { name, value, validity, validationMessage } = e.target;
    setValues({ ...values, [name]: value });

    let errorMessage = validity.valid ? "" : validationMessage;

    setErrors({ ...errors, [name]: errorMessage });
  };

  return (
    <PopupWithForm
      formTitle="Login"
      buttonText={buttonText}
      popupName="login"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup-form__fieldset">
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Email</h3>
          <input
            type="email"
            className="popup-form__input"
            id="email"
            name="email"
            minLength="1"
            placeholder="Email"
            required
            value={values.email}
            onChange={handleChange}
          />
          <span className="popup-form__error">{errors.email}</span>
        </label>
        <label className="popup-form__input-wrap">
          <h3 className="popup-form__label">Password</h3>
          <input
            type="password"
            className="popup-form__input"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={values.password}
            onChange={handleChange}
          />
          <span className="popup-form__error">{errors.password}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default PopupLogin;
