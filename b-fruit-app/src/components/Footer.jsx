import React from "react";
import logo from "../assets/images/logo.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoWifiOutline } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="FAMI Logo" />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
          <div className="flex gap-3 text-gray-500 text-xl">
            <div className="fab fa-facebook-f hover:text-yellow-500">
              <FaFacebookF />
            </div>
            <div className="fab fa-twitter hover:text-yellow-500">
              <FaTwitter />
            </div>
            <div className="fab fa-google-plus-g hover:text-yellow-500">
              <IoWifiOutline />
            </div>
            <div className="fab fa-instagram hover:text-yellow-500">
              <FaPinterestP />
            </div>
            <div className="fab fa-pinterest hover:text-yellow-500">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="font-semibold mb-3">MY ACCOUNT</h3>
          <ul className="space-y-2 text-sm">
            <li>Personal info</li>
            <li>Orders</li>
            <li>Credit slips</li>
            <li>Addresses</li>
            <li>My wishlists</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">HELP CENTER</h3>
          <ul className="space-y-2 text-sm">
            <li>Delivery</li>
            <li>Secure payment</li>
            <li>Contact us</li>
            <li>Stores</li>
            <li>My account</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Secure payment</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">INFORMATION</h3>
          <ul className="space-y-2 text-sm">
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      <div className="pl-20 mt-10 text-sm text-gray-500 border-t border-gray-200 pt-6">
        Copyright &copy; 2025{" "}
        <span className="text-yellow-600">FieldThemes</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
