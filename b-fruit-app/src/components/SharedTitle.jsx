import React from "react";
import { FaLeaf } from "react-icons/fa";
const SharedTitle = ({Text1,Text2}) => {
  return (
    <div className="text-center py-6">
      <p className="text-lg text-gray-500">{Text1}</p>
      <h1 className="text-4xl font-semibold mb-3 hover:text-amber-500 transition duration-500">
        {Text2}
      </h1>

      <div className="flex items-center justify-center gap-3">
        <div className="w-16 border-b-3 border-amber-500" />
        <FaLeaf className="text-amber-500 text-3xl" />
        <div className="w-16 border-b-3 border-amber-500" />
      </div>
    </div>
  );
};

export default SharedTitle;
