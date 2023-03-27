import React from "react";
import FilterBar from "../../Components/FilterBar/filterBar";
import CourseCardContainer from "../../Containers/CourseCardContainer/courseCardContainer";
import { mockcourse } from "../../courseJSON";
const coursesPage = () => {

  return (
    <div>
      <FilterBar />
      <CourseCardContainer courses={mockcourse.courses} />
    </div>
  );
};

export default coursesPage;
