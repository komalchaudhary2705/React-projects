import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../assets/laptop1.jpg";
const NewsCard = ({ item }) => {
  return (
    <div
      className="bg-white
            flex flex-col justify-between"
    >
      {/* <img
              src={item?.urlToImage}
              alt="news-image"
              className="w-full h-48"
            /> */}
      <img
        src={item?.urlToImage || defaultImg}
        alt="image"
        className="w-full h-48"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg ">{item?.title}</h2>

        <p className="text-gray-600 text-sm mt-2 ">{item?.description}</p>
        <Link
          to="/news"
          state={{ url: item?.url }}
          className="cursor-pointer w-full block mt-4 bg-teal-700 text-white text-center py-2 rounded-lg hover:bg-gray-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
