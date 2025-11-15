import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-12 lg:px-24 xl:px-48">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 text-center sm:text-left">
        {/* Column 1 */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <div className="flex flex-col gap-3 text-lg">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <IoLocation size={20} className="text-amber-500" />
              <span>ARFA Tower, Lahore, Pakistan</span>
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhone size={20} className="text-amber-500" />
              <span>+92 300 1234567</span>
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <MdEmail size={20} className="text-amber-500" />
              <span>demo@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-300 leading-relaxed">
            We aim to provide the best dining experience with delicious food and
            a cozy ambiance. Visit us for an unforgettable taste journey!
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <FaFacebook
              size={22}
              className="cursor-pointer hover:text-amber-500 transition-colors duration-300"
            />
            <IoLogoTwitter
              size={22}
              className="cursor-pointer hover:text-amber-500 transition-colors duration-300"
            />
            <FaYoutube
              size={22}
              className="cursor-pointer hover:text-amber-500 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Opening Hours</h1>
          <p className="text-gray-300">Everyday</p>
          <p className="text-gray-300">10:00 AM - 10:00 PM</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-400 text-sm space-y-2">
        <p>© 2025 All Rights Reserved By Free Html Templates</p>
        <p>Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
};

export default Footer;
