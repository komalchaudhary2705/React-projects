import React from "react";

const FeaturedCard = ({image,starIcon,proTitle,price}) => {
  return (
    <div className="flex gap-3">
      <img src={image} alt={proTitle} className="w-[100px] border-1 border-gray-200" />
      <div className="py-2">
        <p className="text-lg font-medium hover:text-amber-500 cursor-pointer">
         {proTitle}
        </p>
        <div className="flex gap-1 text-amber-500">
         {starIcon}
         {starIcon}
         {starIcon}
         {starIcon}
        </div>
        <p className="text-xl font-semibold mt-1">${price}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
