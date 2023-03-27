import React from "react";
import "./CourseCardPage.scss";
import { mockData } from "../../database";
import CourseCard from "../../Components/CourseCard/CourseCard";
const CourseCardPage = () => {
  // const availableJSX = () => {
  //   if (course.available) {
  //     return <div className="courseCard--vailability">Available</div>;
  //   } else {
  //     return <div className="courseCard--vailability">Un-Available</div>;
  //   }
  // };
 
  const course = mockData.course;
   const schools = course.school.join(", ");
  return (
    <>
      {/* <div>
        <CourseCard course={course} />
      </div> */}
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
        <div>{course.professor}</div>
        <div>{course.seatsfilled}/{course.totalSeats}</div>
        <div>{schools}</div>
      </div>
    </>
  );
};

export default CourseCardPage;
