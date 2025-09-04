import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { CURRENT_USER } from "../utils/Constants";

const Header = () => {
  const [isLogin] = useState(false); // toggle this to test

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 shadow-md">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-gray-800">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {isLogin ? (
          <>
            {/* Profile Photo */}
            <img
              src={CURRENT_USER.profilePhoto}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* Name */}
            <span className="text-gray-700 font-medium">{CURRENT_USER.name}</span>
          </>
        ) : (
          <>
            <button
              onClick={() => alert("Sign In clicked")}
              className="px-3 py-2 bg-blue-400 text-white rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>
            <button
              onClick={() => alert("Register clicked")}
              className="px-3 py-2 bg-blue-700 text-white rounded hover:bg-blue-700 transition"
            >
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
