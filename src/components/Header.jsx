import React from "react";
import hand from "../assets/hand_wave - Copy - Copy.png";
import Search from "../assets/search 1.svg"
const Header = () => {
  return (
    <div className="py-5 px-10 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        {/* Left Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Hello Evano</h1>
          <p className="ml-2 font-bold flex items-center">
            <img src={hand} alt="wave" className="w-8 h-8" />
          </p>
        </div>

        {/* Right Section */}
        <div className="relative mt-2 lg:mt-0 flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="h-12 w-full lg:w-[70%] px-2 md:px-10  lg:px-12 border-gray-300 rounded-md outline-none border-none"
          />
          <div className="w-8 h-8 top-2.5 absolute hidden lg:block right-65 left-3 items-center">
            <img src={Search} alt=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
