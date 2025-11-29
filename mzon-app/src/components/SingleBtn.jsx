import React from "react";

const SingleBtn = ({btnText, btnBgColor}) => {
  return (
    <button className={`text-sm ${btnBgColor} py-1 px-3 rounded-full`}>
     {btnText}
    </button>
  );
};

export default SingleBtn;
