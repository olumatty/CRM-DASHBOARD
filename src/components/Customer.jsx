import React from "react";
import Search from "../assets/search 1.svg";
import Arrow from "../assets/chevron-down 2.svg";
import { TableData } from "../../data/TableData";
const Customer = () => {
  return (
    <div className="px-6 mt-10">
      <div className="px-8 lg:h-full py-10 bg-white shadow-lg">
        <div className="justify-between items-center rounded-lg grid space-y-3 lg:flex ">
          <div className="px-2">
            <h2 className="text-2xl font-semibold">All Customers</h2>
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
          <div className="mt-10 mb-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b text-[#93A2AF] font-medium">
                  <td className="px-3 py-3">Customer Name</td>
                  <td className="px-3">Company</td>
                  <td className="px-4">Phone Number</td>
                  <td className="px-3">Email</td>
                  <td className="px-3">Country</td>
                  <td className="">Status</td>
                </tr>
              </thead>
              <tbody className="items-center text-[#292D32]">
                {TableData.map((data) => (
                  <tr
                    key={data.id}
                    className={`space-y-3 items-center border-b`}
                  >
                    <td className="py-4 px-4 font-medium">{data.Name}</td>
                    <td className="py-4 px-4 font-medium ">{data.Company}</td>
                    <td className="py-4 px-4 font-medium ">{data.Number}</td>
                    <td className="py-4 px-4 font-medium ">{data.Email}</td>
                    <td className="py-4 px-4 font-medium ">{data.Country}</td>
                    <td className="py-4  font- medium">
                      <button
                        className={`w-24 h-8 text-center border-solid border-2 rounded
                          ${data.Status && data.Status.toLowerCase() === "active" ? "border-[#DF0404] text-[#DF0404] bg-[#FFC5C5]" :
                          data.Status && data.Status.toLowerCase() === "inactive" ? "border-[#008767] text-[#008767] bg-green-300" : ""
                          }`}>
                        {data.Status}
                      </button>
                    </td>
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
