import { Link } from "react-router-dom";
import React from "react";

import "./Nav.css";
import logo from "../../images/logo.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Nav({ onClickLogin, onClickSignUp, navName }) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="The Recipe Logo" className="nav__logo"></img>
      </Link>

      <div className="nav__links">
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className={`nav__signout nav__button nav__button_${navName}`}
            >
              Sign Out
            </button>
            <Link
              to="/"
              className={`nav__home  nav__link nav__button_${navName}`}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className={`nav__profile nav__link nav__button_${navName}`}
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <button
              type="button"
              className={`nav__login nav__button nav__button_${navName}`}
              onClick={onClickLogin}
            >
              Login
            </button>
            <button
              type="button"
              className={`nav__signup nav__button nav__button_${navName}`}
              onClick={onClickSignUp}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
