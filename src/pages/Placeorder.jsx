import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Placeorder = () => {
  const { gettotalAmount } = useContext(StoreContext);

  return (
    <form className="mt-[3vmax] flex">
      <div className="left w-[60%] flex flex-col items-center justify-center gap-[1vmax]">
        <h1 className="text-[1.7vmax] font-semibold text-[#1b5240] tracking-wide">
          Delivery Details
        </h1>
        <div className="flex gap-[1vmax]">
          <input
            type="text"
            placeholder="First Name"
            className="w-[13vmax] h-[2.5vmax] border border-black/30 px-[0.5vmax]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-[13vmax] h-[2.5vmax] border border-black/30 px-[0.5vmax]"
          />
        </div>
        <input
          type="text"
          placeholder="Apartment,Street,Area"
          className="h-[2.5vmax] w-[27vmax] px-[0.5vmax] border border-black/30"
        />
        <div className="flex gap-[1vmax]">
          <input
            type="text"
            placeholder="City"
            className="w-[13vmax] h-[2.5vmax] border border-black/30 px-[0.5vmax]"
          />
          <input
            type="text"
            placeholder="State"
            className="w-[13vmax] h-[2.5vmax] border border-black/30 px-[0.5vmax]"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="h-[2.5vmax] w-[27vmax] px-[0.5vmax] border border-black/30"
        />
      </div>
      <div className="right w-[40%] flex flex-col">
        <h1 className="text-[1.7vmax] font-semibold text-[#1b5240] tracking-wide">
          Cart Details
        </h1>
        <div className="w-[45%] my-[0.5vmax] flex items-center justify-between border-b border-black/15">
          <p className=" text-[1.1vmax]">SubTotal</p>
          <p className=" text-[1.1vmax]">₹{gettotalAmount()}</p>
        </div>
        <div className="w-[45%] my-[0.5vmax] flex items-center justify-between border-b border-black/15">
          <p className=" text-[1.1vmax]">Delivery Fee</p>
          <p className=" text-[1.1vmax]">₹{gettotalAmount() === 0 ? 0 : 60}</p>
        </div>
        <div className="w-[45%] my-[0.5vmax] flex items-center justify-between border-b border-black/15">
          <p className=" text-[1.1vmax]">Total</p>
          <p className=" text-[1.1vmax]">
            ₹{gettotalAmount() === 0 ? 0 : gettotalAmount() + 60}
          </p>
        </div>
        <button className="w-[45%] border border-[#1b5240] font-semibold text-[#1b5240] h-[2.5vmax] mt-[1vmax] hover:bg-[#1b5240] hover:text-white duration-200">
          Proceed To Pay
        </button>
      </div>
    </form>
  );
};

export default Placeorder;
