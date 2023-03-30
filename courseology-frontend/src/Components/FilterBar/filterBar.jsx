import React from "react";
import "./FilterBar.scss";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import Switcher from "../Switch/switcher";
import CheckBox from "../CheckBox/CheckBox";
const FilterBar = ({
  filterSchool,
  filterTerm,
  filterStudyType,
  filterCourses,
  filterAvailable,
}) => {
  return (
    <div className="filterBar">
      <SelectDropDown type="school" handleFilter={filterSchool} />
      <SelectDropDown type="term" handleFilter={filterTerm} />
      <Switcher
        leftOption="Part-Time"
        rightOption="Full-Time"
        handleSwitch={filterStudyType}
      />
      <CheckBox handleClick={filterAvailable} />
      <input
        type="text"
        placeholder="Search Courses"
        onChange={filterCourses}
      />
    </div>
  );
};

export default FilterBar;
