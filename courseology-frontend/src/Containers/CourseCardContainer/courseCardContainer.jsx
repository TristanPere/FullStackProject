import React from "react";
import "./courseCardContainer.scss";
import CourseCard from "../../Components/CourseCard/courseCard";

const courseCardContainer = ({ courses }) => {
  const cardCollectionJSX = () => {
    let cardCollection = new Array();
    for (let i = 0; i < 20; i++) {
      cardCollection[i] = <CourseCard course={courses} />
    }
    return cardCollection;
  };
  return (
    <div className="coursesContainer">
      {cardCollectionJSX()}
    </div>
  );
};

export default courseCardContainer;
