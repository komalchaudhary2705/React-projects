import React from "react";
import { RiUserFill } from "react-icons/ri";
import { BiSolidCartAlt } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
const Navbar = () => {
  const navBtn = () => {
    console.log("navbar button clicked!");
  };
  return (
    <nav
      className="bg-black flex items-center justify-between w-full h-20 px-10 sm:px-24 xl:px-48 
    
    "
    >
      {/* Logo */}
      <h1 className="text-white text-3xl  cursor-pointer hover:text-amber-400">
        Feane
      </h1>
      {/* menu */}
      <ul className="hidden xl:flex items-center gap-5">
        <li>
          <a href="" className="text-amber-500 hover:text-yellow-400 text-lg ">
            Home
          </a>
        </li>
        <li>
          <a href="" className="text-white hover:text-yellow-400 text-lg">
            Menu
          </a>
        </li>
        <li>
          <a href="" className="text-white hover:text-yellow-400 text-lg">
            About
          </a>
        </li>
        <li>
          <a href="" className="text-white hover:text-yellow-400 text-lg">
            Book Table
          </a>
        </li>
      </ul>
      {/* icons + order button */}
      <div className="hidden xl:flex items-center gap-5">
        <RiUserFill
          size={20}
          className="text-white cursor-pointer hover:text-amber-400"
        />
        <BiSolidCartAlt
          size={20}
          className="text-white cursor-pointer hover:text-amber-400"
        />
        <GrSearch
          size={20}
          className="text-white cursor-pointer hover:text-amber-400"
        />
        <Button BtnInnerText={"Order Online"} btnFunction={navBtn} />
      </div>
      {/* hamburger */}
      <GiHamburgerMenu
        size={30}
        className="block xl:hidden text-white cursor-pointer hover:text-amber-400"
      />
    </nav>
  );
};

export default Navbar;
