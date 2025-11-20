import React from "react";

const SingleBtn = ({btnText}) => {
  return (
    <button className="text-sm bg-green-200 py-1 px-3 rounded-full">
     {btnText}
    </button>
  );
};

export default SingleBtn;
