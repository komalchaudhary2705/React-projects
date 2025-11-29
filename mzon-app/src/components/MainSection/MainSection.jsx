import React from "react";
import Sidebar from "./Sidebar";
import RightMain from "./RightSection/RightMain";

const MainSection = () => {
  return (
    <div className="flex justify-center pt-10 pb-20 md:pb-0">
      <div className="bg-white w-[85%] min-h-[75vh] rounded">
        <div className="flex w-full h-full">
          <Sidebar />
          <div className="flex-1">
            <RightMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
