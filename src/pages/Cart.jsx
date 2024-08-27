import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, cartRemoving, gettotalAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/placeorder");
  };

  const isCartEmpty =
    Object.keys(cartItems).length === 0 ||
    !food_list.some((item) => cartItems[item._id] > 0);

  return (
    <div className="flex flex-col min-h-[29.5vh]">
      {isCartEmpty ? (
        <p className="text-center text-[3vmax] tracking-wider text-[#1b5240] mt-[5vmax] mx-auto">
          <i className="ri-shopping-cart-fill "></i> Your Cart is Empty
        </p>
      ) : (
        <>
          <div className="border-b-[2px] border-[#1b5240] flex items-center justify-between w-[80%] h-[4vmax] mt-[3vmax] mx-auto">
            <p className="w-[5.5%] flex items-center justify-center text-[1vmax] text-[#1b5240] font-semibold">
              Item
            </p>
            <p className="w-[20%] text-[1vmax] text-[#1b5240] font-semibold flex items-center justify-center">
              Title
            </p>
            <p className="w-[20%] text-[1vmax] text-[#1b5240] font-semibold flex items-center justify-center">
              Price
            </p>
            <p className="w-[20%] text-[1vmax] text-[#1b5240] font-semibold flex items-center justify-center">
              Quantity
            </p>
            <p className="w-[20%] text-[1vmax] text-[#1b5240] font-semibold flex items-center justify-center">
              Total
            </p>
            <p className="w-[5%] text-[1vmax] text-[#1b5240] font-semibold">
              Remove
            </p>
          </div>
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={item._id}
                  className="border-b border-black/15 flex items-center justify-between w-[80%] h-[3.5vmax] pb-[0.5vmax] my-[1vmax] mx-auto"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[5.5%] rounded-lg border border-black/50"
                  />
                  <p className="w-[20%] flex items-center justify-center">
                    {item.name}
                  </p>
                  <p className="w-[20%] flex items-center justify-center">
                    ₹{item.price}
                  </p>
                  <p className="w-[20%] flex items-center justify-center">
                    {cartItems[item._id]}
                  </p>
                  <p className="w-[20%] flex items-center justify-center">
                    ₹{item.price * cartItems[item._id]}
                  </p>
                  <p className="w-[5%] flex items-center justify-center">
                    <i
                      onClick={() => cartRemoving(item._id)}
                      className="ri-close-circle-fill text-red-600 cursor-pointer text-[1.5vmax]"
                    ></i>
                  </p>
                </div>
              );
            }
            return null;
          })}
          <div className="w-[80%] mx-auto mt-[2.5vmax] flex flex-col items-end">
            <h1 className="text-[1.7vmax] font-semibold text-[#1b5240] tracking-wide">
              Cart Details
            </h1>
            <div className="w-[25%] my-[0.5vmax] flex items-center justify-between border-b border-black/15">
              <p className=" text-[1.1vmax]">SubTotal</p>
              <p className=" text-[1.1vmax]">₹{gettotalAmount()}</p>
            </div>
            <div className="w-[25%] my-[0.5vmax] flex items-center justify-between border-b border-black/15">
              <p className=" text-[1.1vmax]">Delivery Fee</p>
              <p className=" text-[1.1vmax]">
                ₹{gettotalAmount() === 0 ? 0 : 60}
              </p>
            </div>
            <div className="w-[25%] my-[0.5vmax] flex items-center justify-between border-b border-black/15">
              <p className=" text-[1.1vmax]">Total</p>
              <p className=" text-[1.1vmax]">
                ₹{gettotalAmount() === 0 ? 0 : gettotalAmount() + 60}
              </p>
            </div>
            <button
              onClick={handleCheckout}
              className="w-[25%] border border-[#1b5240] font-semibold text-[#1b5240] h-[2.5vmax] mt-[1vmax] hover:bg-[#1b5240] hover:text-white duration-200"
            >
              Check-Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
