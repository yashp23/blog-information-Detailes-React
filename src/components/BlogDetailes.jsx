import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../common/Header";
import { blogs } from "../Data/blogs";

const BlogDetailes = () => {
  const uselocation = useLocation();
  const currId = uselocation.pathname.split("/")[2];

  // Find the current blog by ID
  const currentBlog = blogs.filter((v) => v.id == currId)[0];

  return (
    <div>
      <Header />

      {currentBlog ? (
        <div>
          <h1>{currentBlog.title}</h1>
          <p>{currentBlog.body}</p>
          {/* Add other blog properties here as needed */}
        </div>
      ) : (
        <p>Blog not found.</p>
      )}
      
    </div>
  );
};

export default BlogDetailes;
