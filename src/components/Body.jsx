import React from "react";
import EditorialList from "./InsideBody/EditorialList";
import { useSelector } from "react-redux";
import BlogForm from "./writingBlog/BlogForm";

const Body = () => {
  const loginInfo = useSelector((state) => state.loggedUser);

  return loginInfo.isLogged ? (
    <BlogForm />
  ) : (
    <div>
      <section className="text-center py-20 px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Explore the new word of thoughts
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl  text-gray-600 mb-8 max-w-2xl mx-auto">
          Dive into insightful blogs, fresh perspectives, and creative ideas
          that inspire you to think differently every day.
        </p>

        {/* Search Box */}
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search articles, topics..."
            className=" w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className=" px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition cursor-pointer">
            Search
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default Body;
