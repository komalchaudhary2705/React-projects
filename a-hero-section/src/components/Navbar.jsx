import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h1>
          Komal<span style={{ color: "red" }}>.</span>
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <ul className={`menu ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>About</a>
        </li>
        <li>
          <a href="#services" onClick={toggleMenu}>Services</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
