import React from "react";
import "./courseCardContainer.scss";
import CourseCard from "../../Components/CourseCard/CourseCard";

const courseCardContainer = ({ courses }) => {
  const cardCollectionJSX = () => {
    let cardCollection = new Array();
    for (let i = 0; i < 20; i++) {
      cardCollection[i] = <div key={i}><CourseCard course={courses} /></div>
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
