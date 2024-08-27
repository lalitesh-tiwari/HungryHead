import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-cont border-2 border-[#1b5240] w-[90%] h-[60vh] mx-auto mt-[2.5vmax] rounded-lg flex flex-col justify-center items-end text-white pr-[5vmax]">
        <h1 className="text-[4.5vmax] font-bold">
          Hungry? You are in <br />
          the right Place.
        </h1>
        <p className="text-[1.1vmax]">
          Order any dish, any meal, at any time and we will deliver it directly
          to your home.
        </p>
        <button className=" px-[1.5vmax] py-[0.5vmax] rounded-lg bg-[#1b5240] text-white mr-[26vmax] mt-[2vmax] border border-white hover:scale-[1.05] duration-200">
          Check Out Our Menu!
        </button>
      </div>
    </div>
  );
};

export default Header;
