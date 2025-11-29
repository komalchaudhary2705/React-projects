import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";

import SavedCard from "../SavedCard";
import SingleBtn from "../SingleBtn";
const Saved = () => {
  return (
    <>
       <RightTopNav title={"My Saved"}>
        <SingleBtn btnText={"Advert (1)"} btnBgColor={"bg-green-200"} />
        <SingleBtn btnText={"Search (0)"} btnBgColor={"bg-gray-200"}/>
      </RightTopNav>
      <div>
        <SavedCard />
        <SavedCard />
      </div>
    </>
  );
};

export default Saved;
