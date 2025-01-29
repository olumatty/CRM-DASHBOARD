import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Data } from "../../data/data";
import profile from "../assets/person_one.jpg";
import right_Arrow from "../assets/chevron-down 2.svg";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className= "w-16 md:w-64 lg:w-80 h-full bg-white fixed left-0 top-0 transition-all duration-300 ease-in-out shadow-md">
      
      {/* Logo & Toggle Section */}
      <div className="flex items-center justify-between py-5 px-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h1 className="md:text-xl lg:text-2xl font-bold hidden md:block">
            Dashboard <span className="font-normal text-sm text-[#838383]">v.01</span>
          </h1>
        </div>
        
      </div>

      {/* Navigation */}
      <ul className="mt-6 space-y-2">
        {Data.map((item, id) => {
          const isActive = activeIndex === id;
          return (
            <li
              key={id}
              className={`font-medium text-[#9197B3] ${
                isActive ? "bg-[#5932EA] text-white rounded-md" : ""
              }`}
              onClick={() => setActiveIndex(id)}
            >
              <div className="flex justify-between items-center py-3 px-5">
                <div className="flex gap-6">
                  <img src={item.icon} alt={item.title} />
                  <span
                    className={`transition-all hidden md:block ${
                      isActive ? "text-white" : "text-[#9197B3]"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <img src={item.icon2} alt="" className="hidden lg:block" />
              </div>
            </li>
          );
        })}
      </ul>

      {/* Upgrade Section */}
      <div className="mt-12 mx-auto hidden lg:block">
        <div className="h-38 w-[90%] mx-auto bg-gradient-to-br from-[#EAABF0] to-[#4623e9] rounded-lg text-center">
          <p className="py-6 text-white font-medium">
            Upgrade to PRO to get <br /> access to all Features!
          </p>
          <button className="w-[80%] h-10 text-center bg-white border rounded-full mb-3 text-[#4925E9] font-bold text-[12px]">
            Get Pro NOW!
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex w-full absolute bottom-4 justify-center lg:justify-between">
        <div className="flex gap-3 items-center lg:ml-6">
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-full"
          />
          <div className="hidden md:block">
            <h3 className="font-medium">Evano</h3>
            <p className="text-[#757575] text-sm">Project Manager</p>
          </div>
        </div>
        <img src={right_Arrow} alt="Arrow" className="w-6 h-6 hidden lg:block mr-5" />
      </div>
    </div>
  );
};

export default Sidebar;
