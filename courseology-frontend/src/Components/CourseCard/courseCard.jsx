import React from "react";
import { Link } from "react-router-dom";
import "./courseCard.scss";
const courseCard = ({ course }) => {
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
  const num = Math.floor(Math.random() * 13 + 1);
  const titleJSX = (num, side) => {
    let classNameString = "";
    if (side === "front") {
      classNameString = "courseCard__title--front courseCard__title--front--";
    } else {
      classNameString =
        "courseCard-Back__title--back courseCard-Back__title--back--";
    }
    classNameString = classNameString.concat(num);
    return (
      <Link to={`/course/${course.uuid}`} className={classNameString}>
        {course.courseTitle}
      </Link>
    );
  };
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="courseCard">
            {titleJSX(num, "front")}
            <div className="courseCard__info">
              <div className="courseCard--schools">
                Schools: {course.school}
              </div>
              <div className="courseCard--dates">
                Start Date: {course.startDate} <br /> End Date: {course.endDate}
              </div>
              {availableJSX()}
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="courseCard-Back">
            {titleJSX(num, "back")}
            <div className="courseCard-Back__info">
              <div className="courseCard-Back--description">
                {course.description}
              </div>
              <div className="courseCard-Back--dates">
                Start Date: {course.startDate} <br /> End Date: {course.endDate}
              </div>
              <div className="courseCard-Back--professors">
                Professor(s): {course.professor}
              </div>
              <div className="courseCard-Back--schools">
                Schools: {course.school}
              </div>
              <div className="courseCard-Back--foot">
                <div className="courseCard-Back--term">
                  {course.season}:{" "}
                  {course.studyType.slice(0, 1).toUpperCase() +
                    course.studyType.slice(1)}{" "}
                  {weeksOfCourse()} Weeks
                </div>
                {availableJSX()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courseCard;
