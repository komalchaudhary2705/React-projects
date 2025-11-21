// TableList.jsx
import React from "react";
import Row from "../Row";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import SingleBtn from "../SingleBtn";

const TableList = () => {
  return (
    <div  className="bg-white">
      {/* Top Navigation */}
      <RightTopNav title="My Advert">
        <SingleBtn btnText="All" btnBgColor="bg-teal-600 text-white" />
        <SingleBtn btnText="Active" btnBgColor="bg-gray-200" />
        <SingleBtn btnText="Reviewing" btnBgColor="bg-gray-200" />
        <SingleBtn btnText="Decline" btnBgColor="bg-gray-200" />
        <SingleBtn btnText="Draft" btnBgColor="bg-gray-200" />
        <SingleBtn btnText="Closed" btnBgColor="bg-gray-200" />
      </RightTopNav>

      {/* Table */}
      <div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border border-gray-200 bg-gray-100 text-sm">
              <th className="px-4 py-4">Advert</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Location</th>
              <th className="px-4 py-4">Price</th>
              <th className="px-4 py-4">Total View</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Rows */}
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
