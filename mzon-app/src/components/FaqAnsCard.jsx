import React from "react";
import { AiOutlineMinus } from "react-icons/ai";

const FaqAnsCard = ({ q, a }) => {
  return (
    <div>
      <div className="bg-gray-100 rounded-lg p-4 mb-4 cursor-pointer shadow-sm md:w-[90%]">
        {/* Question  */}
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900 w-[90%]">{q}</h3>
          <AiOutlineMinus className="text-teal-600" size={22} />
        </div>
      </div>
      {/* Answer */}
      <p className=" text-sm text-gray-600 mt-3 pb-5 px-4">{a}</p>
    </div>
  );
};

export default FaqAnsCard;
