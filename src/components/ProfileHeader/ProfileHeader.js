import "./ProfileHeader.css";
import Nav from "../Nav/Nav";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProfileHeader({}) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const recipeNumber = "5";
  return (
    <header className="profile-header">
      <Nav navName="profile-header" />
      <h1 className="profile-header__title">Saved Recipes</h1>
      <h2 className="profile-header__greeting">Hello, {currentUser.name}!</h2>
      <h3 className="profile-header__recipe-number">
        You have {recipeNumber} of saved recipes
      </h3>
    </header>
  );
}

export default ProfileHeader;
