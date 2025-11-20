// src/components/MainSection/RightSection/RightTopNav.jsx
import React from "react";

const RightTopNav = ({ title,children }) => {
  return (
    <div className="p-5 shadow w-full flex items-center justify-between">
      <h1 className="font-bold">{title}</h1>
      <div className="flex gap-3">
       {children}
      </div>
    </div>
  );
};

export default RightTopNav;
