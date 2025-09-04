import React, { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill both the title and the content.");
      return;
    }
    // For now just log to console - replace with API call or Redux dispatch
    console.log("New Blog Submitted:", { title, content });

    // Clear form
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Write a New Blog</h2>

      <label className="block mb-4">
        <span className="block font-medium mb-1">Blog Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="block font-medium mb-1">Blog Content</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your blog here..."
          rows={6}
          required
        />
      </label>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
