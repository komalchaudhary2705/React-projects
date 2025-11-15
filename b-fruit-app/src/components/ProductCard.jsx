import React from "react";

const ProductCard = ({ imageSRC, productTitle, starIcon, price }) => {
  return (
    <div>
      {/* image */}
      <div className="border border-gray-300">
        <img src={imageSRC} alt={productTitle} className="w-full" />
      </div>
      {/* product text */}
      <div className="text-center py-5">
        <p className="text-lg hover:text-amber-500">{productTitle}</p>
        <div className="flex gap-2 items-center justify-center text-amber-500">
          {starIcon}
          {starIcon}
          {starIcon}
          {starIcon}
        </div>
        <p className="text-2xl">${price} </p>
      </div>
    </div>
  );
};

export default ProductCard;
