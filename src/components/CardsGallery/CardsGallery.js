import "./CardsGallery.css";
import ItemCard from "../ItemCard/ItemCard";

function CardsGallery({ cards, galleryName }) {
  return (
    <ul className={`cards-gallery__list cards-gallery__list_${galleryName}`}>
      {cards.map((item) => {
        return (
          <ItemCard
            item={item}
            key={item.id || item._id}
            galleryName={galleryName}
          />
        );
      })}
    </ul>
  );
}

export default CardsGallery;
