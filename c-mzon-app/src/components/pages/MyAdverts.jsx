import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import NoItem from "../NoItem";
import SingleBtn from "../SingleBtn";
const MyAdverts = () => {
  return (
    <div>
      <RightTopNav title={"My Advert"}>
        <SingleBtn btnText={"All"} />
        <SingleBtn btnText={"Active"} />
        <SingleBtn btnText={"Reviewing"} />
        <SingleBtn btnText={"Decline"} />
        <SingleBtn btnText={"Draft"} />
        <SingleBtn btnText={"Closed"} />
      </RightTopNav>
      <NoItem text={"No Advert Here"} />
    </div>
  );
};

export default MyAdverts;
