import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow px-5 md:px:[7vw] py-5">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">FeshionCloth</h1>
        <ul className="flex items-center gap-6 text-lg">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="">Contact</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
