import React from "react";
import Customer from "../assets/Total-Customer.svg";

const Overview = () => {
  return (
    <div className="px-10 mt-6">
      <div className="w-[90%] h-[200px] px-8 py-10 bg-white rounded-lg items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="h-36 w-36 bg-gradient-to-br from-[#D3FFE7] to-[#EFFFF6] rounded-full flex items-center justify-center ">
            <img src={Customer} alt="" />
          </div>
          <div>
              <h3>Total Customers</h3>
              <h1>5,423</h1>
              <div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
