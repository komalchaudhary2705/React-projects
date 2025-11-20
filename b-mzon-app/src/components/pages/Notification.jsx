import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";

import NoItem from "../NoItem";
import SingleBtn from "../SingleBtn";

const Notification = () => {
  return (
    <>
      <RightTopNav title={"Notification"}>
        <SingleBtn btnText={"Mark All As Read"} btnBgColor={"bg-green-200"} />
      </RightTopNav>
      <NoItem text={"No Notification Here"} />
    </>
  );
};

export default Notification;
