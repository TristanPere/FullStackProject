import React, { useEffect,  useState } from "react";
import "./SelectDropDown.scss";
const SelectDropDown = ({ type , handleFilter }) => {
  const terms = ["Spring", "Summer", "Fall", "Winter"];
  let optionsJSX;
  let placeholderJSX;
  const [schools, setSchools] = useState([]);
  const getSchools = async () => {
    let url = `http://localhost:8080/course/schools`;
    const res = await fetch(url);
    const data = await res.json();
    setSchools(data);
  };
  if (type === "school") {
    optionsJSX = schools.map((school, index) => {
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
  useEffect(()=>{
    getSchools()
  },[])
  return (
    <div>
      <select onChange={handleFilter}>
        {placeholderJSX}
        {optionsJSX}
      </select>
    </div>
  );
};

export default SelectDropDown;
