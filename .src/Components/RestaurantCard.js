import { useContext } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className=" m-5 p-4 w-[250px] h-80 bg-slate-200 rounded-xl text-wrap text-left">
      <img
        className="w-[200px] h-[150px] m-auto mb-2 rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold ">{name}</h3>
      <h4 className="text-xs m-1">{cuisines.join(",")}</h4>
      <h4 className="text-sm m-0.5">{avgRating}</h4>
      <h5 className="text-sm m-0.5">{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
