import React from "react";
import { Link } from "react-router-dom";
import "./DropDown.scss";
const dropDown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <Link to="/courses">
          <a>View Courses</a>
        </Link>
        <Link to="/professors">
          <a>View Professors</a>
        </Link>
        <Link to="/courses/create">
          <a>Add Course</a>
        </Link>
        <Link to="/professors/create">
          <a>Add Professor</a>
        </Link>
      </div>
    </div>
  );
};

export default dropDown;
