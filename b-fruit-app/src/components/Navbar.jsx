import React from "react";
import logo from "../assets/images/logo.jpg";
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="px-12 md:px-20 pt-6 pb-4 flex items-center justify-between
    fixed top-0 w-full bg-white shadow
    ">
      {/* logo */}
      <img src={logo} alt="logo" />
      {/* menu */}
      <ul className="hidden lg:flex gap-10">
        <li>
          <a className="border-b-2 hover:border-b-2 border-black" href="">
            HOME
          </a>
        </li>
        <li>
          <a className="hover:border-b-2 border-black" href="">
            CATALOG
          </a>
        </li>
        <li>
          <a className="hover:border-b-2 border-black" href="">
            WHAT'S NEW
          </a>
        </li>
        <li>
          <a className="hover:border-b-2 border-black" href="">
            PAGES
          </a>
        </li>
        <li>
          <a className="hover:border-b-2 border-black" href="">
            DESIGNERS
          </a>
        </li>
        <li>
          <a className="hover:border-b-2 border-black" href="">
            SALE
          </a>
        </li>
      </ul>
      {/* icons */}
      <div className="flex gap-5">
        <FaSearch size={20} />
        <BsCart4 size={20} />
        <GiHamburgerMenu size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
