import React from "react";
import "./filterBar.scss"
const filterBar = () => {
  return (
    <div className="filterBar">
      <input type="text" placeholder="Search Courses" />
      <div>Schools</div>
      <div>Duration</div>
      <div>Show unavailable courses</div>
    </div>
  );
};

export default filterBar;
