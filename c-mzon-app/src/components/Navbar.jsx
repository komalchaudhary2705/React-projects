import React from "react";
import { Link } from "react-router-dom";
import { IoIosSave } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#1f999a] py-6 px-[11%] flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-white text-xl font-bold">
        MZONE
      </Link>

      {/* Links + Button */}
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-4">
          <li className="bg-[#f6f0f044] text-white hover:bg-amber-400 hover:text-black rounded-full w-8 h-8 flex items-center justify-center">
            <Link to="/">
              <IoIosSave size={20} />
            </Link>
          </li>

          <li className="bg-[#f6f0f044] text-white hover:bg-amber-400 hover:text-black rounded-full w-8 h-8 flex items-center justify-center">
            <Link to="/">
              <IoMdNotificationsOutline size={20} />
            </Link>
          </li>

          <li className="bg-[#f6f0f044] text-white hover:bg-amber-400 hover:text-black rounded-full w-8 h-8 flex items-center justify-center">
            <Link to="/">
              <MdOutlineMessage size={20} />
            </Link>
          </li>

          <li className="bg-[#f6f0f044] text-white hover:bg-amber-400 hover:text-black rounded-full w-8 h-8 flex items-center justify-center">
            <Link to="/">
              <LuLayoutList size={20} />
            </Link>
          </li>

          <li className="bg-orange-400 rounded-full w-8 h-8 flex items-center justify-center">
            <Link to="/">
              <FaUserCircle size={20} />
            </Link>
          </li>
        </ul>

        <button className="bg-white font-semibold px-5 py-2 rounded shadow">
          Start Selling
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
