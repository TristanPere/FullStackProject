import React from "react";
import "./filterBar.scss"
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import Switcher from "../Switch/switcher";
import CheckBox from "../CheckBox/CheckBox";
const filterBar = () => {
  return (
    <div className="filterBar">
      <SelectDropDown type="school"/>
      <SelectDropDown type="term"/>
      <Switcher/>
      <CheckBox/>
      <input type="text" placeholder="Search Courses" />
    </div>
  );
};

export default filterBar;
