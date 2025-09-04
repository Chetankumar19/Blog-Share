import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className=" text-black py-8 px-4  shadow-2xl bg-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Logo or Site Name */}
        <div className="text-lg font-semibold">
          All copy right recived {new Date().getFullYear()}
        </div>

        {/* Center: Navigation or Links */}
        <div className="flex space-x-6 text-black">
          <Link to="/about" className="hover:font-bold transition">
            About
          </Link>
          <a href="#contact" className="hover:font-bold transition">
            Contact
          </a>
          <a href="#privacy" className="hover:font-bold transition">
            Privacy Policy
          </a>
        </div>

        {/* Right: Social Icons or Tagline */}
        <div className="text-sm text-black">
          Made by Chetan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
