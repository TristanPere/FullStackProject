import { React, useState, useEffect } from "react";
import CourseCardContainer from "../../Containers/CourseCardContainer/CourseCardContainer";
const ProfessorPage = ({ professor }) => {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    if (professor) {
      let url = `http://localhost:8080/courses?limit=50`;
      const res = await fetch(url);
      const data = await res.json();
      setCourses(
        data.filter((course) => {
          return course.professor === professor.fullName;
        })
      );
    }
  };
  useEffect(() => {
    getCourses();
  }, [professor]);
  console.log(courses);
  return (
    professor && (
      <div className="profCard">
        <img src={`${professor.idImage}`} alt="photo" srcset="" />
        <div>
          {professor.fullName}
          <br /> {professor.email}
        </div>
        <div>{professor.school}</div>
        <div>
          <CourseCardContainer courses={courses} />
        </div>
      </div>
    )
  );
};

export default ProfessorPage;
