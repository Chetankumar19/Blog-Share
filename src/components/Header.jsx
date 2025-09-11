import React, { useContext, useEffect } from "react";
import Logo from "../assets/logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LoggedUserContext } from "../utils/LoggedUserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useContext(LoggedUserContext);
  const loginUser = useSelector((state) => state.loggedUser);

  useEffect(() => {
    if (loginUser.isLogged && location.pathname === "/signIn") {
      navigate("/", { replace: true });
    }
  }, [loginUser.isLogged, location.pathname, navigate]);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 shadow-md fixed">
      {/* Left Section: Logo + Nav */}
      <div className="flex items-center space-x-6">
        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-bold text-gray-800"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-15 h-10 rounded-full object-cover"
          />
          <span>Thoughts</span>
        </Link>

        {/* Navigation links (separated with |) */}
        {/* Navigation links (hidden on small screens) */}
        <nav className="hidden md:flex items-center text-gray-700 font-medium space-x-2">
          <Link to="/editorial" className="hover:text-blue-600 transition">
            Editorial
          </Link>
          <span>|</span>
          <Link to="/top-rated" className="hover:text-blue-600 transition">
            Top Rated
          </Link>
          <span>|</span>
          <Link to="/search" className="hover:text-blue-600 transition">
            serach
          </Link>
        </nav>

      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {loginUser.isLogged ? (
          <>
            {/* Profile Photo */}
            <img
              src={data.defaultUserPhoto}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* Name */}
            <span className="text-gray-700 font-medium">
              {data.loggedInUserName}
            </span>
          </>
        ) : (
          <>
            <Link
              to="/signIn"
              className="px-3 py-2 bg-blue-200 text-blue-700 rounded hover:text-blue-900 hover:bg-blue-300 transition"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="inline-block px-3 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
