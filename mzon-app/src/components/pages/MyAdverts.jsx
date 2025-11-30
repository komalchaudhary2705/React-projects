import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import NoItem from "../NoItem";
import SingleBtn from "../SingleBtn";
import RightBottom from "../MainSection/RightSection/RightBottom";
const MyAdverts = () => {
  return (
    <div>
      <RightTopNav title={"My Advert"}>
        <SingleBtn btnText={"All"} btnBgColor={"bg-teal-600 text-white"} />
        <SingleBtn btnText={"Active"} btnBgColor={"bg-gray-200"} />
        <SingleBtn btnText={"Reviewing"} btnBgColor={"bg-gray-200"} />
        <SingleBtn btnText={"Decline"} btnBgColor={"bg-gray-200"} />
        <SingleBtn btnText={"Draft"} btnBgColor={"bg-gray-200"} />
        <SingleBtn btnText={"Closed"} btnBgColor={"bg-gray-200"} />
      </RightTopNav>
      <RightBottom>
        <NoItem text={"No Advert Here"} />
      </RightBottom>
    </div>
  );
};

export default MyAdverts;
