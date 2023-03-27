import React from "react";
import FilterBar from "../../Components/FilterBar/filterBar";
import CourseCardContainer from "../../Containers/CourseCardContainer/courseCardContainer";
import { mockcourse } from "../../courseJSON";
const coursesPage = () => {
  const filterSchool = (event) => {
    console.log(event.target.value);
  };
  const filterTerm = (event) => {
    console.log(event.target.value);
  };
  const filterStudyType = (event)=>{
    console.log(event.target.checked) 
  }
   const filterAvailable = (event)=>{
    console.log(event.target.checked) 
  }
  
  const filterCourses = (event) =>{
    console.log(event.target.value)
  }
  return (
    <div>
      <FilterBar filterSchool={filterSchool} filterTerm={filterTerm} filterStudyType={filterStudyType} filterAvailable={filterAvailable} filterCourses={filterCourses} />
      <CourseCardContainer courses={mockcourse.courses} />
    </div>
  );
};

export default coursesPage;
