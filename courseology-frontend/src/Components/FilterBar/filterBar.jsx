import React from "react";
import "./filterBar.scss"
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import Switcher from "../Switch/switcher";
import CheckBox from "../CheckBox/CheckBox";
const filterBar = ({filterSchool, filterTerm, filterStudyType, filterCourses, filterAvailable}) => {
  
  return (
    <div className="filterBar">
      <SelectDropDown type="school" handleFilter={filterSchool}/>
      <SelectDropDown type="term" handleFilter={filterTerm}/>
      <Switcher handleSwitch={filterStudyType}/>
      <CheckBox handleClick={filterAvailable} />
      <input type="text" placeholder="Search Courses" onChange={filterCourses}/>
    </div>
  );
};

export default filterBar;
