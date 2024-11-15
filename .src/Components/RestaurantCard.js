import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4 style={{ textWrap: "wrap" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
