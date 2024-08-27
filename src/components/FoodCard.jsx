import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
const FoodCard = ({ id, name, price, description, image }) => {
  const { cartItems, cartAdding, cartRemoving } = useContext(StoreContext);

  return (
    <div className="border border-[#1b5240] rounded-lg p-[1vmax] w-[20vmax] hover:scale-[0.95] duration-200">
      <div className="relative">
        <img
          src={image}
          className="food-img rounded-lg w-full h-[30vh] object-cover"
        />
        {!cartItems[id] ? (
          <i
            onClick={() => cartAdding(id)}
            className="absolute right-[0.3%] top-[84%] rounded-lg cursor-pointer px-[0.3vmax] bg-white ri-add-circle-fill add text-[1.5vmax] text-[#1b5240]"
          ></i>
        ) : (
          <div className="absolute  right-[0] top-[84%] rounded bg-white/85 flex items-center gap-[0.5vmax] w-fit px-[0.3vmax]">
            <i
              onClick={() => cartRemoving(id)}
              className="ri-indeterminate-circle-fill cursor-pointer text-[1.5vmax] text-[#1b5240]"
            ></i>
            <p className="text-[1.2vmax] font-semibold">{cartItems[id]}</p>
            <i
              onClick={() => cartAdding(id)}
              className="ri-add-circle-fill cursor-pointer text-[1.5vmax] text-[#1b5240]"
            ></i>
          </div>
        )}
      </div>
      <div>
        <div className="mt-[0.5vmax] flex items-center justify-between">
          <p className="text-[1.1vmax] font-semibold">{name}</p>
        </div>
        <p className="text-[0.9vmax] text-black/70">{description}</p>
        <p className="text-[1.2vmax] text-[#1b5240] font-semibold">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
