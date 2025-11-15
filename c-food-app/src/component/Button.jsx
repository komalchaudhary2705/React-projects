import React from "react";

const Button = ({ BtnInnerText, btnFunction,icon }) => {
  return (
    <div>
      <button
        onClick={btnFunction}
        className={`flex items-center bg-amber-400 hover:bg-amber-500
           text-white px-10 py-2 font-medium rounded-full 
           `}
      >
        {BtnInnerText} {icon} 
      </button>
    </div>
  );
};

export default Button;
