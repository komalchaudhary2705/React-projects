import React from "react";
import { Link } from "react-router-dom";
import { IoIosSave } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import user from './UserExist'
const Navbar = () => {
 

  return (
    <nav className="bg-[#1f999a] py-4 px-2 md:px-[10%] flex items-center justify-between">
      <Link to="/" className="text-white text-xl font-bold">
        MZONE
      </Link>

      <div className="flex items-center gap-2 md:gap-6">
        <ul className="flex items-center gap-2 md:gap-4">
          {user && (
            <>
              <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
                <Link to="/user/saved">
                  <IoIosSave size={20} />
                </Link>
              </li>

              <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
                <Link to="/user/notifications">
                  <IoMdNotificationsOutline size={20} />
                </Link>
              </li>

              <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
                <Link to="/user/message">
                  <MdOutlineMessage size={20} />
                </Link>
              </li>

              <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
                <Link to="/user/list">
                  <LuLayoutList size={20} />
                </Link>
              </li>
            </>
          )}

          {/* User Settings (always visible) */}
          <li className="bg-white text-orange-600 rounded-full p-1 flex items-center justify-center">
            <Link to="/user/settings">
              <FaUserCircle size={30} />
            </Link>
          </li>
          {/* User Login/Register*/}
          {!user && (
            <li className="text-white rounded-full p-1 flex items-center justify-center text-lg">
              <Link to="/login">Login/register</Link>
            </li>
          )}
        </ul>

        <button className="bg-white font-semibold px-4 py-2 md:px-5 md:py-2 
        rounded shadow cursor-pointer">
          <Link to="/seller-form">Start Selling</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
