import React from "react";

import "./PopupWithForm.css";
import Popup from "../Popup/Popup";
import { CurrentPopup } from "../../contexts/CurrentPopupContext";

function PopupWithForm({
  popupName,
  formTitle,
  buttonText,
  children,
  onClose,
  onSubmit,
}) {
  const { setActivePopup } = React.useContext(CurrentPopup);

  const handleSwitchToLogIn = () => {
    setActivePopup("login");
  };

  const handleSwitchToRegister = () => {
    setActivePopup("register");
  };

  return (
    <Popup>
      <div
        className={`popup-form__container popup-form__container_${popupName}`}
      >
        <h3 className="popup-form__header">{formTitle}</h3>
        <form className="popup-form__form" onSubmit={onSubmit}>
          {children}
          <div className="popup-form__button-container">
            <button
              className={`popup-form__submit-button popup-form__submit-button_${popupName}`}
            >
              {buttonText}
            </button>

            {popupName === "login" && (
              <button
                type="button"
                id="register"
                className="popup__change_register"
                onClick={handleSwitchToRegister}
              >
                or Register
              </button>
            )}
            {popupName === "register" && (
              <button
                type="button"
                id="login"
                className="popup__change_register"
                onClick={handleSwitchToLogIn}
              >
                or Login
              </button>
            )}
          </div>
        </form>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </Popup>
  );
}

export default PopupWithForm;
