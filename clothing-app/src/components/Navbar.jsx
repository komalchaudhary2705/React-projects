import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-teal-600 shadow px-5 py-3">
      <nav className="flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <h1 className="font-extrabold text-white flex flex-col items-center">
            <BsShop size={35} />
            <span className="text-sm tracking-wide">FashionHub</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-lg">
          <Link className="text-white hover:text-gray-200" to="/">Home</Link>
          <Link className="text-white hover:text-gray-200" to="/products">Shop</Link>
          <Link className="text-white hover:text-gray-200" to="/men">Men</Link>
          <Link className="text-white hover:text-gray-200" to="/women">Women</Link>
          <Link className="text-white hover:text-gray-200" to="/kids">Kids</Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-3 bg-teal-700 rounded-lg p-4 space-y-4 animate-fadeIn">
          <Link
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
            to="/"
          >
            Home
          </Link>
          <Link
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
            to="/products"
          >
            Shop
          </Link>
          <Link
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
            to="/men"
          >
            Men
          </Link>
          <Link
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
            to="/women"
          >
            Women
          </Link>
          <Link
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
            to="/kids"
          >
            Kids
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
