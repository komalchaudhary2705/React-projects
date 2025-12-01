import React from "react";

const ProductList = ({ apiData }) => {
  return (
    <div className="px-20 grid grid-cols-6 w-full min-h-screen gap-20 py-10">
      {apiData.map((item) => (
        <div className="bg-gray-50 text-center p-5">
          <img src={item.imageUrl} alt="" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
