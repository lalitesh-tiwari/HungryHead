import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodCard from "./FoodCard";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-[4vmax] w-[90%] mx-auto" >
      <h1 className="text-[1.5vmax] font-semibold tracking-wide ml-[2vmax]">
        Top Dishes For You
      </h1>
      <div className="w-full flex flex-wrap gap-[1.5vmax] p-[2vmax]">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodCard
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
