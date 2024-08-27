import React, { useState } from "react";

const Login = ({ setloginPopup }) => {
  const [userStatus, setuserStatus] = useState("Sign In");

  return (
    <div className="fixed z-10 w-full h-screen bg-[rgba(0,0,0,0.65)] flex items-center justify-center">
      <form className=" rounded-lg bg-[#1b5240] w-[30%] h-[65%] text-white flex flex-col items-center justify-between p-[1vmax]">
        <div className="w-[90%] flex items-center justify-between">
          <h1 className="text-[1.7vmax] ">
            <i className="ri-restaurant-fill text-[1.7vmax] mr-1"></i>
            {userStatus}
          </h1>
          <i
            onClick={() => setloginPopup(false)}
            className="ri-close-large-line text-[1.7vmax] "
          ></i>
        </div>
        <div className="flex flex-col items-center gap-[1vmax] mt-[2.5vmax]">
          {userStatus === "Sign In" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-[25vmax] h-[3vmax] rounded text-center text-[#1b5240] outline-none bg-zinc-100"
              required
            />
          )}
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-[25vmax] h-[3vmax] rounded text-center text-[#1b5240] outline-none bg-zinc-100"
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-[25vmax] h-[3vmax] rounded text-center text-[#1b5240] outline-none bg-zinc-100"
            required
          />
        </div>
        <button className="w-[25vmax] h-[3vmax] border border-white rounded text-[1.2vmax] tracking-wide hover:bg-white hover:text-[#1b5240] duration-200">
          {userStatus === "Sign Up" ? "Create Account!" : "Sign In"}
        </button>
        <div className="flex items-center justify-center w-[90%]">
          {userStatus === "Sign In" ? (
            <></>
          ) : (
            <label htmlFor="check" className="text-[1vmax]">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="h-3 mr-2"
              />
              I Agree to the Terms Of Use & Privacy Policy.
            </label>
          )}
        </div>
        {userStatus === "Sign In" ? (
          <p className="mb-[4vmax]">
            Don't Have An Account?
            <span
              onClick={() => setuserStatus("Sign Up")}
              className="cursor-pointer underline ml-1"
            >
              Create One..
            </span>
          </p>
        ) : (
          <p className="mb-[1vmax]">
            Already Have An Account?
            <span
              onClick={() => setuserStatus("Sign In")}
              className="cursor-pointer underline ml-1"
            >
              Login Here!
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
