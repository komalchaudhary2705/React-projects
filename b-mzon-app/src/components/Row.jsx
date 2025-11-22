import React from "react";
import advImg from "../assets/images/laptop1.jpg";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
const Row = () => {
  return (
    <tr className="border-b border-gray-200 p-2">
      {/* Image + Name */}
      <td className="px-4 py-3 flex items-center gap-3">
        <img
          src={advImg}
          alt="product"
          className="w-12 h-12 rounded-md object-cover"
        />
        <span className="text-sm font-medium">iPhone 13 Pro Max</span>
      </td>

      {/* Date */}
      <td className="px-4 py-3 text-sm">12 May, 2023</td>

      {/* Location */}
      <td className="px-4 py-3 text-sm">Abuja, Asokoro</td>

      {/* Price */}
      <td className="px-4 py-3 text-sm font-medium">₦2,340</td>

      {/* Total View */}
      <td className="px-4 py-3 text-sm">23,040</td>

      {/* Action Icons */}
      <td className="flex items-center gap-4 relative">
        <button className="text-gray-600 hover:text-black text-lg flex items-center absolute bottom-3 left-0">
          <FaRegEdit />
        </button>
        <button className="text-gray-600 hover:text-black text-lg flex items-center absolute bottom-3 left-6">
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
};

export default Row;
