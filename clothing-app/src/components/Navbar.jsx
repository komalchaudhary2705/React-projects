import React from "react";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-teal-600 shadow px-10 py-3">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-extrabold text-white
        flex  flex-col items-center 
        "><BsShop size={35}/><span className="text-sm">FashionHub.</span></h1>
        <ul className="flex items-center gap-6 text-lg">
            <Link className="text-white" to="/">Home</Link>
            <Link className="text-white" to="/products">Products</Link>
            <Link className="text-white" to="">Contact</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
