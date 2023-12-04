import "./Profile.css";
import CardsGallery from "../CardsGallery/CardsGallery";
import { recipes } from "../../utils/const";

function Profile() {
  return <CardsGallery cards={recipes} galleryName="profile" />;
}

export default Profile;
