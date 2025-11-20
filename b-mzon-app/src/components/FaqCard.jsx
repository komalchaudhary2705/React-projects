import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqCard = ({ q, a, id, openid, toggleFAQ }) => {
  return (
    <div
      className="bg-gray-100 rounded-lg p-4 mb-4 cursor-pointer shadow-sm"
      onClick={() => toggleFAQ(id)}
    >
      {/* Question Row */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900 w-[90%]">{q}</h3>

        {openid === id ? (
          <AiOutlineMinus className="text-teal-600" size={22} />
        ) : (
          <AiOutlinePlus className="text-teal-600" size={22} />
        )}
      </div>

      {/* Answer */}
      {openid === id && (
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{a}</p>
      )}
    </div>
  );
};

export default FaqCard;
