import React from "react";
import { FaCartShopping } from "react-icons/fa6";
const ProductCard = ({ imageUrl, title, description, price }) => {
  return (
    <div className="flex flex-col bg-black text-white shadow shadow-gray-400 rounded  cursor-pointer">
      <div className="bg-white flex items-center justify-center py-6">
        <img
          src={imageUrl}
          alt=""
          className="w-36 h-36 rounded-full hover:scale-110"
        />
      </div>
      <div className="p-10">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="flex items-center justify-between">
          <p> ${price}</p>
          <p className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 cursor-pointer">
            <FaCartShopping  onClick={()=>{console.log("Product Cart button clicked!!");}}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
