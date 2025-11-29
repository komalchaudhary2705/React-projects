import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineAddHomeWork,
  MdOutlineFeed,
  MdOutlineSettings,
} from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="hidden md:block h-full border-2 border-gray-100 rounded">
      <div className="text-center flex flex-col items-center p-7">
        <FaUserCircle size={48} className="text-orange-500" />
        <h1 className="font-semibold my-1">James Bond</h1>
        <p className="text-[13px] pb-4 border-b-2 text-gray-500 border-gray-200">
          jamesbond007@gmail.com
        </p>
      </div>

      <ul className="pt-4 flex flex-col gap-2 font-semibold pr-5">
        <li className="pl-5 flex items-center gap-3 bg-[#1f999a] text-white rounded-r py-2">
          <MdOutlineAddHomeWork /> <Link to="/user/my-adverts">My Adverts</Link>
        </li>

        <li className="pl-5 gap-3 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r">
          <MdOutlineFeed /> <Link to="/user/feedback">Feedback</Link>
        </li>

        <li className="pl-5 gap-3 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r">
          <FaQuestionCircle /> <Link to="/user/faq">FAQ's</Link>
        </li>

        <li className="pl-5 gap-3 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r">
          <MdOutlineSettings /> <Link to="/user/settings">Settings</Link>
        </li>

        <li className="pl-5 gap-3 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r">
          <TbLogout2 /> <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
