import React from "react";
import Header from "../common/Header";
import { blogs } from "../Data/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Header />
      <h1>Blog Page</h1>
      <div className="container">
        {blogs.map((v, i) => {
          return (
            <div key={i} className="blogitems">
              <h3>{v.title}</h3>
              <p>{v.body}</p>
              <button>
                <Link to={`/blog/${v.id}`}>Read More</Link>{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
