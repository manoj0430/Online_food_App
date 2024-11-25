import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (id) => {
  //Fetch The data
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + id);

    const json = await data.json();

    setResInfo(json.data);
  };
  return resInfo; // Basically I need to return the resInfo, what is this resInfo? Basically it is a local variable for this hook
};

export default useRestaurantMenu;
