import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";

import NoItem from "../NoItem";
import SingleBtn from "../SingleBtn";
import RightBottom from "../MainSection/RightSection/RightBottom";

const Notification = () => {
  return (
    <>
      <RightTopNav title={"Notification"}>
        <SingleBtn btnText={"Mark All As Read"} btnBgColor={"bg-green-200"} />
      </RightTopNav>
      <RightBottom>
        <NoItem text={"No Notification Here"} />
      </RightBottom>
    </>
  );
};

export default Notification;
