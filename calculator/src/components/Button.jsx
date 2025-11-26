import React from "react";

const Button = ({ btnText, onClick, btnStyle }) => {
  return (
    <button
      className={`rounded-full w-16 h-16 border-2 border-teal-600 cursor-pointer
      text-white outline-none text-2xl flex items-center justify-center
      ${btnStyle}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
