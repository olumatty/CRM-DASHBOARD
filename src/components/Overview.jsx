import React from "react";
import Customer from "../assets/Total-Customer.svg";
import Arrow from "../assets/arrow-green.svg";
import Members from "../assets/Members.svg";
import Arrow_red from "../assets/arrow-red.svg";
import Active from "../assets/Active.svg";

const Overview = () => {
  return (
    <div className="px-10 mt-6">
      <div className="lg:w-[90%] lg:h-[200px] py-10 bg-white rounded-lg grid space-y-3 lg:flex justify-around items-center shadow-lg">
        <div className="flex items-center space-x-4 ">
          <div className="h-32 lg:h-36 w-32 lg:w-36 bg-gradient-to-br from-[#D3FFE7] to-[#EFFFF6] rounded-full flex items-center justify-center ">
            <img src={Customer} alt="" />
          </div>
          <div>
            <h3 className="text-[#ACACAC]">Total Customers</h3>
            <h1 className="text-4xl mt-2 text-[#333333] font-bold">5,423</h1>
            <div className="flex mt-2 ">
              <img src={Arrow} alt="" />
              <p className="text-[#00AC4F]">
                16% <span className="text-[#292D32]">this month</span>
              </p>
            </div>
          </div>
          <div className="border-r-2">
            <span></span>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <div className="h-32 lg:h-36 w-32 lg:w-36 bg-gradient-to-br from-[#D3FFE7] to-[#EFFFF6] rounded-full flex items-center justify-center ">
            <img src={Members} alt="" />
          </div>
          <div>
            <h3 className="text-[#ACACAC]">Members</h3>
            <h1 className="text-4xl mt-2 text-[#333333] font-bold">1,893</h1>
            <div className="flex mt-2 ">
              <img src={Arrow_red} alt="" />
              <p className="text-[#D0004B]">
                1% <span className="text-[#292D32]">this month</span>
              </p>
            </div>
          </div>
          <div className="border-r-2">
            <span></span>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <div className="h-32 lg:h-36 w-32 lg:w-36 bg-gradient-to-br from-[#D3FFE7] to-[#EFFFF6] rounded-full flex items-center justify-center ">
            <img src={Active} alt="" />
          </div>
          <div>
            <h3 className="text-[#ACACAC]">Active Now</h3>
            <h1 className="text-4xl mt-2 text-[#333333] font-bold">189</h1>
            <div className="flex mt-2 ">
              <div className="flex justify-between items-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1669475535925-a011d7c31d45?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 rounded-full border-4 border-white"
                  />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-4"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-8"
                  />
                    <img
                    src="https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-12"
                  />
                    <img
                    src="https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
