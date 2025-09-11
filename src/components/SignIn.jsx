import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/loggedUserSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.length === 0) {
      setErrorMessage("No User found");
      return;
    }
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(Object.entries(userInfo));
    const foundUser = users.find(
      (item) => item.email === email
    );
    if (!foundUser) {
      setErrorMessage("Wrong email or password");
      return;
    }
    
    dispatch(login({email,password})); // ✅ Full user object
    navigate("/");
  };

  return (
    <div className="pt-16 flex items-center justify-center min-h-[calc(100vh-128px)] bg-gray-100 ">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
          </label>

          {/* Register Link */}
          <p className="text-sm text-gray-600">
            New user?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
          <span className="text-red-400">{errorMessage || ""}</span>

          {/* Submit */}
          <button
            type="submit"
            className="w-[30%] my-5 py-2 text-center bg-blue-500 text-white font-semibold rounded hover:bg-green-700 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
