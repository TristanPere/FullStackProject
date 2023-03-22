import React from "react";
import TitleBar from "../../Components/TitleBar/titleBar"
import FilterBar from "../../Components/FilterBar/filterBar";
import CourseCardContainer from "../../Containers/CourseCardContainer/courseCardContainer";
import { mockData } from '../../database'
const coursesPage = () => {
  return (
    <div>
      <TitleBar />
      <FilterBar />
      <CourseCardContainer courses = {mockData.course}/>
    </div>
  );
};

export default coursesPage;
