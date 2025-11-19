import React from "react";

const CatButton = ({ innerText,btnFun }) => {
  return (
    <button onClick={btnFun}
    className="bg-black text-white px-6 py-1 rounded-full hover:bg-amber-500">
      {innerText}
    </button>
  );
};

export default CatButton;
