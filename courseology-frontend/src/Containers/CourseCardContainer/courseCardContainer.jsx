import React from "react";
import "./courseCardContainer.scss";
import CourseCard from "../../Components/CourseCard/CourseCard";

const courseCardContainer = ({ courses }) => {

 const courseCardsJSX = courses.map((course,index)=>{
      return <div key={course.uuid}><CourseCard course={course}/></div>
    })
  
  return (
    <div className="coursesContainer">
      {courseCardsJSX}
    </div>
  );
};

export default courseCardContainer;
