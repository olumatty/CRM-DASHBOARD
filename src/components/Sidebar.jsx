import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Data } from "../../data/data";

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(2)
  return (
    <div className="w-[24%] h-full bg-white p-3">
      <div className="flex justify-start gap-3 py-3 px-5 items-center">
        <div className="flex items-center ">
          <img src={logo} alt="" />
        </div>
        <h1 className="text-2xl font-bold">
          Dashboard{" "}
          <span className="font-normal text-sm text-[#838383]">v.01 </span>
        </h1>
      </div>

      <ul className="mt-14 space-y-3">
        {Data.map((item, id) => {
            const isActive = activeIndex ===  id;
          return (
            <li key={id} className={`font-medium text-[#9197B3] ${isActive ? 'bg-[#5932EA] text-white w-full h-12 rounded-md':" "}`} onClick={() => setActiveIndex(id )}>
              <div className="flex justify-between items-center py-3 px-5">
                <div className="flex gap-6">
                  <img src={item.icon} alt={item.title} />
                  <span className={`transition-all ${isActive ? 'text-white' : 'text-[#9197B3]'}`}>{item.title}</span>
                </div>
                <img src={item.icon2} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
      
      <div className="mt-20 mx-auto"> 
        <div className="h-30 w-[90%] mx-auto bg-gradient-to-br from-[#EAABF0] to-[#4623e9] rounded-lg ">
            <p>Upgrade to PRO to get access all Features!</p>

            <button> Get Pro NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
