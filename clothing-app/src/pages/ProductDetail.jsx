import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data";

const SingleProduct = () => {
  const { id } = useParams();
  const productInfo = products.find((product) => product.id === Number(id));

  return (
    <div className="px-[7%] pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* LEFT —— Image */}
      <div className="w-full">
        <img
          src={productInfo.imageUrl}
          alt={productInfo.title}
          className="w-full h-[420px] object-cover rounded"
        />
      </div>

      {/* RIGHT —— Text Content */}
      <div className="px-3">
        {/* Title */}
        <h1 className="text-3xl font-semibold tracking-wide leading-snug">
          {productInfo.title}
        </h1>

        {/* Price Section */}
        <div className="mt-2">
          <p className="text-2xl font-bold text-gray-900">
            $ {productInfo.price}
          </p>
        </div>

        {/* Category */}
        <p className="text-gray-600 mt-2 text-lg tracking-wide">
          Category: <span className="font-medium">{productInfo.category}</span>
        </p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mt-6 text-lg">
          {productInfo.desc}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          porro illum accusantium commodi tempore voluptatem, necessitatibus
          reiciendis architecto quasi qui sunt nihil. Pariatur dolore
          accusantium, in ad cupiditate dolorum molestiae ea harum vel iure
          perferendis sunt obcaecati facilis ipsum enim officia accusamus
          ducimus quisquam. Illo iusto magni optio quia molestias.
        </p>

        {/* Add to Cart Button */}
        <button className="w-full bg-teal-600 mt-8 text-white py-3 rounded
         text-lg font-medium tracking-wide shadow-md hover:bg-teal-700 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
