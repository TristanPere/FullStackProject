import React from "react";
import "./courseCardContainer.scss";
import CourseCard from "../../Components/CourseCard/CourseCard";

const CourseCardContainer = ({ courses, filter }) => {
  let filteredCourses = courses;
  if (filter) {
    filteredCourses = filteredCourses.filter((course) => {
      return course.courseTitle
        .toLowerCase()
        .includes(filter.course.toLowerCase());
    });
    filteredCourses = filteredCourses.filter((course) => {
      if (filter.school == "null") {
        return true;
      }
      return course.school == filter.school;
    });
    filteredCourses = filteredCourses.filter((course) => {
      if (filter.term == "null") {
        return true;
      }
      return course.season == filter.term;
    });
    filteredCourses = filteredCourses.filter((course) => {
      return course.studyType == filter.studyType;
    });
    filteredCourses = filteredCourses.filter((course) => {
      if (filter.showUnAvailable) {
        return true;
      } else {
        const validDate = () => {
          const today = new Date();
          let courseDate = course.startDate.split("-");
          courseDate = new Date(courseDate);
          return courseDate > today;
        };
        return course.totalSeats > course.seatsFilled && validDate();
      }
    });
  }
  const courseCardsJSX = filteredCourses.map((course, index) => {
    return (
      <div key={course.uuid}>
        <CourseCard course={course} />
      </div>
    );
  });

  return <div className="coursesContainer">{courseCardsJSX}</div>;
};

export default CourseCardContainer;
