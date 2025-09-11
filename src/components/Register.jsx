import React, { useState } from "react";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { useDispatch, useSelector } from "react-redux"; // added useSelector
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check validation; returns a message string if invalid, or null if valid
    const message = checkValidData(email, userName, password, confirmPassword);

    if (message) {
      setErrorMessage(message);
      return; // stop if invalid
    }

    // If valid, clear error and dispatch
    setErrorMessage(null);
    const isAlreadyContain = users.find(
      (item) => item.email === email
    );
    if (isAlreadyContain) setErrorMessage("User already Available");
    localStorage.setItem("user", JSON.stringify({ email, userName, password }));

    dispatch(addUser({ email, userName, password }));

    // Clear form inputs
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/signIn");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-128px)] bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Username */}
          <label className="block">
            User Name <span className="text-red-600">*</span>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Enter user name"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none"
            />
            <span className="text-red-400 px-1 py-5">
              {errorMessage === "Name is not valid" ? errorMessage : " "}
            </span>
          </label>

          {/* Email */}
          <label className="block">
            Email <span className="text-red-600">*</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none"
            />
            <span className="text-red-400 px-1 py-5">
              {errorMessage === "Email ID is not valid" ? errorMessage : " "}
            </span>
          </label>

          {/* Password */}
          <label className="block">
            Password <span className="text-red-600">*</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none"
            />
            <span className="text-red-400 px-1 py-5">
              {errorMessage === "Password is not valid" ? errorMessage : " "}
            </span>
          </label>

          {/* Confirm Password */}
          <label className="block">
            Confirm Password <span className="text-red-600">*</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm password"
              className="w-full mt-1 px-4 py-2 border rounded focus:outline-none"
            />
            <span className="text-red-400 px-1 py-5">
              {errorMessage === "Password doesn't match" ? errorMessage : " "}
            </span>
          </label>

          {/* Sign In Link */}
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signIn"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
          <span className="text-red-400 ">
            {errorMessage === "User already Available" ? errorMessage : " "}
          </span>
          {/* Submit */}
          <button
            type="submit"
            className="w-[30%] my-2 py-2 text-center bg-blue-500 text-white font-semibold rounded hover:bg-green-700 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
