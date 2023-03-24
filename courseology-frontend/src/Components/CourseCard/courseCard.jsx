import React from "react";
import "./courseCard.scss";
const courseCard = ({ course }) => {
let schools = course.school[0];
if(course.school.length>=2){
  schools = schools + ", "+ course.school[1]
}
// console.log(course.school.split())
  // const availableJSX = () => {
  //   if (course.available) {
  //     return <div className="courseCard--vailability">Available</div>;
  //   } else {
  //     return <div className="courseCard--vailability">Un-Available</div>;
  //   }
  // };
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
    return (
      <div className={classNameString}>
        {course.courseTitle}
      </div>
    );
  };
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="courseCard">
            {titleJSX(num, "front")}
            <div className="courseCard__info">
              <div className="courseCard--description">
                {course.description}
              </div>
              <div className="courseCard--schools">
                Schools: {schools}
              </div>
              {/* {availableJSX()} */}
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
                Professor(s): {course.proffessor}
              </div>
              <div className="courseCard-Back--schools">
                Schools: {schools}
              </div>
              <div className="courseCard-Back--foot">
                <div className="courseCard-Back--term">
                  {course.season}: {course.type}
                </div>
                {/* {availableJSX()} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courseCard;
