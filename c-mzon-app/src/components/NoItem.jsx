import React from "react";
import noitem from "../assets/images/noitem.png";
const NoItem = ({text}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={noitem} alt="" className="w-[50%] md:w-[30%]" />
      <h1>{text}</h1>
    </div>
  );
};

export default NoItem;
