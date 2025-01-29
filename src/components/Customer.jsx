import React from "react";
import Search from "../assets/search 1.svg";
import Arrow from "../assets/chevron-down 2.svg";
import { TableData } from "../../data/TableData";
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";

const Customer = () => {
  return (
    <div className=" w-[50%] md:w-full px-4 sm:px-6 mt-6">
      <div className="px-4 md:px-8 py-6 md:py-10 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">All Customers</h2>
            <p className="text-[#16C098] mt-2">Active Members</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            {/* Search Input */}
            <div className="relative flex items-center w-full sm:w-64">
              <input
                type="text"
                placeholder="Search"
                className="h-10 sm:h-12 w-full px-4 bg-[#E7E7E7] text-[#B5B7C0] rounded-lg outline-none"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <img src={Search} alt="Search" className="w-5 h-5" />
              </div>
            </div>
            {/* Sort Dropdown */}
            <div className="flex items-center bg-[#E7E7E7] h-10 sm:h-12 px-4 rounded-lg cursor-pointer">
              <p className="text-[#7E7E7E]">Sort by: <span className="text-[#3D3C42]">Newest</span></p>
              <img src={Arrow} alt="Arrow" className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6 flex justify-center">
          <div className="w-2/4 sm:w-full">
            <table className="w-full table-auto border-collapse text-center">
              <thead>
                <tr className="border-b text-[#93A2AF] font-medium text-sm md:text-base">
                  <td className="px-3 py-3">Customer Name</td>
                  <td className="px-3">Company</td>
                  <td className="px-3">Phone Number</td>
                  <td className="px-3">Email</td>
                  <td className="px-3">Country</td>
                  <td className="px-3">Status</td>
                </tr>
              </thead>
              <tbody className="text-[#292D32] text-sm md:text-base">
                {TableData.map((data) => (
                  <tr key={data.id} className="border-b">
                    <td className="py-3 px-3">{data.Name}</td>
                    <td className="py-3 px-3">{data.Company}</td>
                    <td className="py-3 px-3">{data.Number}</td>
                    <td className="py-3 px-3">{data.Email}</td>
                    <td className="py-3 px-3">{data.Country}</td>
                    <td className="py-3 px-3">
                      <button
                        className={`w-20 h-8 text-center border-2 rounded-lg 
                          ${data.Status.toLowerCase() === "inactive" ? "border-[#DF0404] text-[#DF0404] bg-[#FFC5C5]" : ""} 
                          ${data.Status.toLowerCase() === "active" ? "border-[#008767] text-[#008767] bg-green-300" : ""}`}
                      >
                        {data.Status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <div className="text-[#B5B7C0] text-sm md:text-base">Showing data 1 to 8 of 256k entries</div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <button className="w-8 h-8 flex items-center justify-center bg-[#EEEEEE] border rounded-lg">
              <img src={LeftArrow} alt="Previous" className="w-4 h-4" />
            </button>
            {[1, 2, 3, 4, "...", 40].map((num, index) => (
              <button
                key={index}
                className={`w-8 h-8 flex items-center justify-center border rounded-lg ${num === 1 ? "bg-[#5932EA] text-white" : "bg-[#EEEEEE] text-[#404B52]"}`}
              >
                {num}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center bg-[#EEEEEE] border rounded-lg">
              <img src={RightArrow} alt="Next" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
