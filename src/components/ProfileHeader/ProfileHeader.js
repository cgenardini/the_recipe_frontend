import "./ProfileHeader.css";
import Nav from "../Nav/Nav";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProfileHeader({ handleSignOut }) {
  const { currentUser, userCards } = React.useContext(CurrentUserContext);

  const recipeNumber = userCards.length;

  return (
    <header className="profile-header">
      <Nav navName="profile-header" handleSignOut={handleSignOut} />
      <h1 className="profile-header__title">Saved Recipes</h1>
      <h2 className="profile-header__greeting">Hello, {currentUser.name}!</h2>
      <h3 className="profile-header__recipe-number">
        You have {recipeNumber} of saved recipes
      </h3>
    </header>
  );
}

export default ProfileHeader;
