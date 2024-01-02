import "./Profile.css";
import React from "react";
import CardsGallery from "../CardsGallery/CardsGallery";
import { recipes } from "../../utils/const";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile() {
  const { currentUser, userCards } = React.useContext(CurrentUserContext);

  return <CardsGallery cards={userCards} galleryName="profile" />;
}

export default Profile;
