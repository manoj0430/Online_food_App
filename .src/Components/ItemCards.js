import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemCards = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-6 font-bold text-sm">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600 text-md mb-2">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 p-4">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-auto rounded-md border border-gray-350"
            />
            <div className="absolute -mt-4">
              <button
                className="p-2 mx-16 rounded-lg bg-gray-400 mb-2 text-white h-10 "
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
