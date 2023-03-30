import React from "react";
import { Link } from "react-router-dom";
import "./DropDown.scss";
const dropDown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <Link to="/">
          <a>Home Page</a>
        </Link>
        <Link to="/professors">
          <a>All Professors</a>
        </Link>
        <Link to="/">
          <a>All Student</a>
        </Link>
        <Link to="/courses">
          <a>CourseCardPage</a>
        </Link>
      </div>
    </div>
  );
};

export default dropDown;
