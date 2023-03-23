import React from "react";
import { mockData } from "../../database";
import "./SelectDropDown.scss";
const selectDropDown = ({ type }) => {
  const terms = ["Spring", "Summer", "Autumn", "Winter"];
  let optionsJSX;
  let placeholderJSX;
  if (type == "school") {
    optionsJSX = mockData.course.schools.map((school, index) => {
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
      <select>
        {placeholderJSX}
        {optionsJSX}
      </select>
    </div>
  );
};

export default selectDropDown;
