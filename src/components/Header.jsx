import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LoggedUserContext } from "../utils/LoggedUserContext";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useContext(LoggedUserContext);
  const loginUser = useSelector((state) => state.loggedUser);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (loginUser.isLogged && location.pathname === "/signIn") {
      navigate("/", { replace: true });
    }
  }, [loginUser.isLogged, location.pathname, navigate]);

  const navItems = [
    { path: "/editorial", label: "Editorial" },
    { path: "/top-rated", label: "Top Rated" },
    { path: "/search", label: "Search" },
  ];

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-blue-100 shadow-md fixed z-10">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-6">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-gray-700 font-medium space-x-6">
          {navItems.map((item, index) => (
            <React.Fragment key={item.path}>
              <Link
                to={item.path}
                className="relative group hover:text-blue-700 hover:font-bold transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {index < navItems.length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Right Section (Desktop only) */}
      <div className="hidden md:flex items-center space-x-4">
        {loginUser.isLogged ? (
          <>
            <img
              src={data.defaultUserPhoto}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-700 font-medium">
              {data.loggedInUserName}
            </span>
          </>
        ) : (
          <>
            <Link
              to="/signIn"
              className="px-4 py-2 bg-blue-200 text-blue-800 rounded-md hover:bg-blue-300 hover:text-blue-900 transition shadow-sm"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition shadow-sm"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-700"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-20 flex">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col space-y-6">
            {/* Close Button */}
            <button
              className="self-end text-gray-600"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Sidebar Links */}
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-700 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Sidebar Auth Buttons */}
            {loginUser.isLogged ? (
              <div className="flex items-center space-x-3">
                <img
                  src={data.defaultUserPhoto}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-700 font-medium">
                  {data.loggedInUserName}
                </span>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link
                  to="/signIn"
                  onClick={() => setIsSidebarOpen(false)}
                  className="px-4 py-2 bg-blue-200 text-blue-800 rounded-md hover:bg-blue-300 hover:text-blue-900 transition shadow-sm text-center"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsSidebarOpen(false)}
                  className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition shadow-sm text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Clicking outside closes sidebar */}
          <div className="flex-1" onClick={() => setIsSidebarOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
