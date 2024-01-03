import "./Profile.css";
import React from "react";
import CardsGallery from "../CardsGallery/CardsGallery";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile() {
  const { userCards } = React.useContext(CurrentUserContext);

  return <CardsGallery cards={userCards} galleryName="profile" />;
}

export default Profile;
