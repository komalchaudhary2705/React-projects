import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import NoItem from "../NoItem";
import RightBottom from "../MainSection/RightSection/RightBottom";

const Feedback = () => {
  return (
    <>
      <RightTopNav title={"Feedback"} />
      <RightBottom>
        <NoItem text={"No Feedback Here"} />
      </RightBottom>
    </>
  );
};

export default Feedback;
