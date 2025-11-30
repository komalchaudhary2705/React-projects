import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import NoItem from "../NoItem";
import RightBottom from "../MainSection/RightSection/RightBottom";

const Message = () => {
  return (
    <>
      <RightTopNav title={"Message"} />
      <RightBottom>
        <NoItem text={"No Message Here"} />
      </RightBottom>
    </>
  );
};

export default Message;
