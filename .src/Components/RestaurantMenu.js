import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { id } = useParams();

  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) {
    return <h1>Loading....</h1>;
  }

  const { name, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold text-3xl my-5">{name}</h2>
      <h4 className="font-bold italic text-lg ">
        {costForTwoMessage}-⭐{avgRating}
      </h4>
      {/* Here is we need a Accordian In which it has Header and Body where body is collapasable */}
      {/* For Each Category I need that Accordian Item */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card.card.title}
          data={category?.card.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
