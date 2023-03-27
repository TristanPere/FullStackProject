import React from "react";
import { mockcourse } from "../../courseJSON";
import "./SelectDropDown.scss";
const selectDropDown = ({ type , handleFilter }) => {
  const terms = ["Spring", "Summer", "Autumn", "Winter"];
  let optionsJSX;
  let placeholderJSX;
  if (type == "school") {
    const schools = mockcourse.courses.map((course)=>{
      return course.school
    })
    optionsJSX = [...new Set(schools.join(",").split(","))].map((school, index) => {
      const id = `${school}${index}`;
      return (
        <option value={school} key={id}>
          {school}
        </option>
      );
    });
    placeholderJSX = (
      <option value={"null"} defaultValue>
        Select School..
      </option>
    );
  } else {
    optionsJSX = terms.map((term, index) => {
      const id = `${term}${index}`;
      return (
        <option value={term} key={id}>
          {term}
        </option>
      );
    });
    placeholderJSX = (
      <option value={"null"} defaultValue>
        Select Term..
      </option>
    );
  }
  return (
    <div>
      <select onChange={handleFilter}>
        {placeholderJSX}
        {optionsJSX}
      </select>
    </div>
  );
};

export default selectDropDown;
