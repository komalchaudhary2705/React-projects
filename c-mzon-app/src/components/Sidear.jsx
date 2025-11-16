import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Sidear = () => {
  return (
    <div className="w-[200px] h-full p-5 border-2 border-gray-100 rounded">
      {/* user profile */}
      <div className="text-center flex flex-col items-center">
        <FaUserCircle size={45} className="text-orange-500" />
        <h1 className="font-semibold my-1">Jams Bond</h1>
        <p className="text-[13px] pb-3 border-b-2 text-gray-500 border-gray-200">jamesbond007@gmail.com</p>
      
      </div>
      {/* menu list */}
    </div>
  );
};

export default Sidear;
