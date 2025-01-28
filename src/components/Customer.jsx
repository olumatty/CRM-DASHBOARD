import React from "react";
import Search from "../assets/search 1.svg";
import Arrow from "../assets/chevron-down 2.svg";
import { TableData } from "../../data/TableData";
const Customer = () => {
  return (
    <div className="px-6 mt-10">
    <div className="px-8  lg:h-full py-10 bg-white shadow-lg">
      <div className=" justify-between items-center rounded-lg grid space-y-3 lg:flex ">
        <div>
          <h2 className="text-3xl font-semibold">All Customers</h2>
          <p className="text-[#16C098] mt-2">Active Members</p>
        </div>
        <div className="flex items-center ">
          <div className="relative mt-2 lg:mt-0 flex w-full items-center">
            <input
              type="text"
              placeholder="Search"
              className="h-12 w-[80%] px-2 md:px-10  lg:px-12 bg-[#E7E7E7] text-[#B5B7C0] rounded-lg outline-none border-none"
            />
            <div className="w-8 h-8 top-2.5 absolute hidden lg:block right-65 left-3 items-center">
              <img src={Search} alt=" " />
            </div>
          </div>
          <div className="w-[50%] mr-10 ">
            <div className="h-12 px-2 bg-[#E7E7E7] text-center items-center justify-center rounded-lg flex ">
              <p className="flex text-[#7E7E7E]">
                Sort by: <span className="text-[#3D3C42]">Newest</span>
              </p>
              <div>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6 mb-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b text-sm text-[#93A2AF] font-semibold">
                <td className="px-3">Customer Name</td>
                <td className="px-3">Company</td>
                <td className="px-3">Phone Number</td>
                <td className="">Email</td>
                <td>Country</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody className="items-center">
              {TableData.map((data) => (
              <tr key={data.id} className={`space-y-3 items-center border-b`}>
              <td className="py-3 px-4 font-semibold">{data.Name}</td>
              <td className="py-3 px-4 font-semibold ">{data.Company}</td>
              <td className="py-3 px-4 font-semibold ">{data.Number}</td>
              <td className="py-3 px-4 font-semibold ">{data.Email}</td>
              <td className="py-3 px-4 font-semibold ">{data.Country}</td>
              <td className="py-3 px-4 font-semibold">{data.Status}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Customer;
