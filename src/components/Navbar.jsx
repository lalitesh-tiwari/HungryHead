import React, { useContext, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setloginPopup }) => {
  const [menu, setmenu] = useState("Home");

  const { gettotalAmount } = useContext(StoreContext);

  return (
    <div className="navbar w-full h-[10vh] border-b border-[#FF7F50] flex items-center justify-between px-[4vmax] bg-[#ff7f50]" id="top">
      <div className="w-fit">
        <Link to="/">
          <h1 className="text-[1.6vmax] text-[white] font-semibold flex items-center gap-1 ">
            <i className="ri-restaurant-fill text-[1.7vmax]"></i>HungryHead
          </h1>
        </Link>
      </div>
      <div className="navlinks w-[25%] flex items-center justify-evenly text-[white]">
        <Link
          to="/"
          onClick={() => setmenu("Home")}
          className={`font-semibold ${menu === "Home" ? "active" : ""}`}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => setmenu("Menu")}
          className={`font-semibold ${menu === "Menu" ? "active" : ""}`}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("About Us")}
          className={`font-semibold ${menu === "About Us" ? "active" : ""}`}
        >
          About Us
        </a>
      </div>
      <div className="navbtns w-[15%] flex justify-between">
        <i className="ri-search-line text-[1.5vmax] text-[white]"></i>
        <div className="cart-div relative">
          <Link to="/cart">
            <i className="ri-shopping-cart-line text-[1.5vmax] text-[white]"></i>
          </Link>
          <div
            className={`${
              gettotalAmount() === 0
                ? ""
                : `absolute z-[9] w-[0.6vmax] h-[0.6vmax] top-[-3%] right-[-25%]
          bg-red-600 border border-white rounded-full`
            }`}
          ></div>
        </div>
        <button
          onClick={() => setloginPopup(true)}
          className="border-2 border-[white] text-[1vmax] text-[white] font-semibold flex items-center px-[0.8vmax] rounded-[2vmax] hover:bg-white hover:text-[#ff7f50] duration-200"
        >
          Login/Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
