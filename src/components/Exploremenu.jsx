import React from "react";
import { menu_list } from "../assets/assets";

const Exploremenu = ({ category, setcategory }) => {
  return (
    <div
      className="w-[90%] mx-auto mt-[2.5vmax] rounded-lg"
      id="menu"
    >
      <h1 className="text-[1.5vmax] font-semibold tracking-wider mb-[1vmax] ml-[2vmax]">
        Check Out Our Menu!
      </h1>
      <div className="flex items-center justify-evenly">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;

          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center justify-evenly w-[11vmax]"
            >
              <img
                src={item.menu_image}
                className={`rounded-full w-[80%] h-[8.5vmax] cursor-pointer object-contain ${
                  isActive ? "border-[2px] border-[#FF7F50]" : ""
                }`}
                alt={item.menu_name}
              />
              <p
                className={`text-[1.1vmax] mt-[0.5vmax] cursor-pointer ${
                  isActive ? "text-[#FF7F50]" : ""
                }`}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exploremenu;
