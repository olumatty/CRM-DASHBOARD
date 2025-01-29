import React from "react";
import hand from "../assets/hand_wave - Copy - Copy.png";
import Search from "../assets/search 1.svg";

const Header = () => {
  return (
    <div className="w-[50%] md:w-full py-4 px-4 sm:px-6 md:px-8 lg:px-10 bg-gray-100 ">
      <div className="flex flex-col sm:flex-row items-center md:justify-between gap-4">
        
        {/* Left Section */}
        <div className="flex items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
            Hello Evano
          </h1>
          <img src={hand} alt="wave" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 ml-2" />
        </div>

        {/* Right Section (Search Bar) */}
        <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="h-10 sm:h-12 w-full px-3 sm:px-4 md:px-6 border border-gray-300 rounded-lg outline-none"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <img src={Search} alt="Search Icon" className="w-5 sm:w-6 h-5 sm:h-6" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
