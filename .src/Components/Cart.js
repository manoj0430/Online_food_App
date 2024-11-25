import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="w-1/2 mx-auto p-4 text-center">
        <h1 className="font-bold  text-2xl">Cart</h1>
        <button
          className="m-4 px-4 py-2 bg-gray-600 rounded-lg text-white hover: cursor-pointer "
          onClick={handleClearCart}
        >
          Clear
        </button>
        <div className="shadow-xl">
          <ItemCards items={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
