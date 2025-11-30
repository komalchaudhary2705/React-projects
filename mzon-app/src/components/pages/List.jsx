import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import RightBottom from "../MainSection/RightSection/RightBottom";
import NoItem from "../NoItem";

const List = () => {
  return (
    <>
      <RightTopNav title={"List"} />
      <RightBottom>
        <NoItem />
      </RightBottom>
    </>
  );
};

export default List;
