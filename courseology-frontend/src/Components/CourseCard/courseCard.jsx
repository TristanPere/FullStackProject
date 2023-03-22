import React from "react";
import "./courseCard.scss";
const courseCard = ({ course }) => {
  const schoolListString = course.schools.join(", ");
  const availableJSX = () => {
    if (course.available) {
      return <div className="courseCard--vailability">Available</div>;
    } else {
      return <div className="courseCard--vailability">Un-Available</div>;
    }
  };
  const num = Math.floor(Math.random() * 13 + 1);
  const titleJSX = (num, side) => {
    let classNameString = "";
    if (side == "front") {
      classNameString = "courseCard__title--front courseCard__title--front--";
    } else {
      classNameString =
        "courseCard-Back__title--back courseCard-Back__title--back--";
    }
    classNameString = classNameString.concat(num);
    console.log(classNameString);
    return (
      <div className={classNameString}>
        {course.courseTitle}
        {num}
      </div>
    );
  };
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div className="courseCard">
            {titleJSX(num, "front")}
            <div className="courseCard__info">
              <div className="courseCard--description">
                {course.courseDescription}
              </div>
              <div className="courseCard--schools">
                Schools: {schoolListString}
              </div>
              {availableJSX()}
            </div>
          </div>
        </div>
        <div class="flip-card-back">
          <div className="courseCard-Back">
            {titleJSX(num, "back")}
            <div className="courseCard-Back__info">
              <div className="courseCard-Back--description">
                {course.courseDescription}
              </div>
              <div className="courseCard-Back--dates">
                Start Date: {course.startDate} <br /> End Date: {course.endDate}
              </div>
              <div className="courseCard-Back--professors">
                Professor(s): {course.proffessors}
              </div>
              <div className="courseCard-Back--schools">
                Schools: {schoolListString}
              </div>
              <div className="courseCard-Back--foot">
                <div className="courseCard-Back--term">
                  {course.season}: {course.type}
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
