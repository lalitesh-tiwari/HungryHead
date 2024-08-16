import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="relative w-full h-[50vh] mt-[5vmax] bg-[#FF7F50] text-white flex items-center justify-evenly"
      id="footer"
    >
      <i
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute cursor-pointer ri-arrow-up-circle-fill text-[4vmax] right-[1%] bottom-0"
      ></i>
      <div className="w-[30%] h-[70%] flex flex-col items-start justify-evenly">
        <h1 className="text-[2.5vmax] font-semibold flex items-center gap-1 ">
          <i className="ri-restaurant-fill text-[2vmax]"></i>HungryHead
        </h1>
        <p className="text-[1vmax]">
          Satisfy your cravings with just a few clicks. Discover, order, and
          enjoy delicious meals delivered straight to your door. Your go-to food
          ordering experience for every appetite!
        </p>
        <div className="flex items-center gap-5">
          <i className="ri-instagram-fill text-[2vmax] cursor-pointer hover:text-black duration-200"></i>
          <i className="ri-facebook-circle-fill text-[2vmax] cursor-pointer hover:text-black duration-200"></i>
          <i className="ri-youtube-fill text-[2vmax] cursor-pointer hover:text-black duration-200"></i>
          <i className="ri-twitter-x-line text-[1.6vmax] cursor-pointer hover:text-black duration-200"></i>
        </div>
      </div>
      <div className="w-[20%] h-[70%] flex flex-col items-start justify-evenly py-[1vmax] pl-[3vmax]">
        <h1 className="text-[1.5vmax] font-bold">ABOUT</h1>
        <p className="cursor-pointer hover:underline">Home</p>
        <p className="cursor-pointer hover:underline">Delivery</p>
        <p className="cursor-pointer hover:underline">Privacy Policy</p>
        <p className="cursor-pointer hover:underline">Careers</p>
      </div>
      <div className="w-[20%] h-[70%]  flex flex-col items-start justify-center gap-[1vmax] pb-[4vmax]">
        <h1 className="text-[1.5vmax] font-bold">GET IN TOUCH</h1>
        <p className="cursor-pointer hover:underline">+91-987654321</p>
        <p className="cursor-pointer hover:underline">contact@hungryhead.com</p>
      </div>
    </div>
  );
};

export default Footer;
