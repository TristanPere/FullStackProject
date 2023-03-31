import React from "react";
import "./CoursePage.scss";
import { useParams } from "react-router-dom";
const CourseCardPage = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.filter((course) => course.uuid == courseId)[0];
  
  const validDate = () => {
    const today = new Date();
    let courseDate = course.startDate.split("-");
    courseDate = new Date(courseDate);
    return courseDate > today;
  };
  const weeksOfCourse = () => {
    return Math.ceil(
      Math.abs(new Date(course.endDate) - new Date(course.startDate)) /
        (1000 * 60 * 60 * 24 * 7)
    );
  };
  const availableJSX = () => {
    if (course.totalSeats > course.seatsFilled && validDate()) {
      return <div className="courseCard--vailability">Available</div>;
    } else {
      return <div className="courseCard--vailability">Un-Available</div>;
    }
  };
  
  return (
    course && (
      <>
        <div>
          <h1 className="courseTitle">{course.courseTitle}</h1>
          <div className="courseHours">
            <div className="--dates">
              Start Date: {course.startDate} <br /> End Date: {course.endDate}
            </div>
            <div className="courseHours--term">
              {course.season}: {course.studyType}
              <br />
              {course.contactHours}
            </div>
          </div>
          <div>{course.description}</div>
          <div>{weeksOfCourse()}</div>
          {availableJSX()}
          <div>
            {course.seatsfilled}/{course.totalSeats}
          </div>
          <div>{course.school}</div>
        </div>
      </>
    )
  );
};

export default CourseCardPage;
