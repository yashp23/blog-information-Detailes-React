import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header part</h1>
      <nav>
        <ul>
          <li> <Link to={'/'}>Home</Link></li>
          <li><Link to={'/About'}>About</Link></li>
          <li><Link to={'/Course'}>Courses</Link></li>
          <li><Link to={'/Blog'}>Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
