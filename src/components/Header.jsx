import React from "react";
import hand from "../assets/hand_wave - Copy - Copy.png";
import Search from "../assets/search 1.svg";

const Header = () => {
  return (
    <div className="py-5 px-10  bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Hello Evano</h1>
          <img src={hand} alt="wave" className="w-8 h-8 ml-2" />
        </div>

        {/* Right Section */}
        <div className="relative mt-4 lg:mt-0 flex items-center w-full lg:w-auto max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="h-12 w-full px-4 lg:px-10 border border-gray-300 rounded-lg outline-none"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <img src={Search} alt="Search Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
