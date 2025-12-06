import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-[7vw]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">FashionHub</h1>
          <p className="text-gray-400">
            Elevate your style with premium fashion for men, women, and kids. Trendy, elegant, and unique.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-teal-500 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-teal-500 transition-colors duration-300"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-teal-500 transition-colors duration-300">Home</a></li>
            <li><a href="/men" className="hover:text-teal-500 transition-colors duration-300">Men</a></li>
            <li><a href="/women" className="hover:text-teal-500 transition-colors duration-300">Women</a></li>
            <li><a href="/kids" className="hover:text-teal-500 transition-colors duration-300">Kids</a></li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-500 transition-colors duration-300">Help & FAQs</a></li>
            <li><a href="#" className="hover:text-teal-500 transition-colors duration-300">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-teal-500 transition-colors duration-300">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-teal-500 transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Subscribe</h2>
          <p className="text-gray-400 mb-4">
            Get the latest updates, new arrivals, and exclusive offers straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg text-gray-900 w-full focus:outline-none"
            />
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} FashionHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
