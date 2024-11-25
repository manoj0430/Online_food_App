import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-1/2 mx-auto my-5 bg-gray-100 p-4 shadow-lg  rounded-lg">
        <div
          className="flex justify-between hover: cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemCards items={data.itemCards} />}
      </div>
      {/* Body */}
    </div>
  );
};

export default RestaurantCategory;
