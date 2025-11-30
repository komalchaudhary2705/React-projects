import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import { AiOutlineEdit } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import RightBottom from "../MainSection/RightSection/RightBottom";
const Setting = () => {
  return (
    <div>
      {/* Top Navigation */}
      <RightTopNav title="Profile" />

      <RightBottom>
        <div className="p-6">
          {/* ==== Profile Header ==== */}
          <div className="flex items-center gap-4 mb-8 mt-6">
            <FaUserCircle size={60} className="text-orange-500" />
            <div>
              <h2 className="text-lg font-semibold">James Bond</h2>
              <p className="text-gray-500 text-sm">jamesbond007@gmail.com</p>
            </div>
          </div>

          <hr className="mb-10 border-gray-300" />

          {/* ==== Form Section ==== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="James Bond"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-white"
                />
                <AiOutlineEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="relative mt-1">
                <input
                  type="email"
                  placeholder="johndeo245@gmail.com"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-white"
                />
                <AiOutlineEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="+1 *** 2982 4544"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-white"
                />
                <AiOutlineEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Government ID */}
            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                Government ID{" "}
                <span className="text-yellow-500">
                  <TiTick className="border rounded-full" />
                </span>
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="National ID Card"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-white"
                />
                <AiOutlineEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-medium">Address</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="Not Provided"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-white"
                />
                <AiOutlineEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative mt-1 flex items-center">
                <input
                  type="password"
                  placeholder="****************"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm bg-white"
                />

                <button className="absolute right-3 text-sm font-semibold text-black underline cursor-pointer">
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </RightBottom>
    </div>
  );
};

export default Setting;
