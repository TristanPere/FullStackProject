import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseCardContainer from "../../Containers/CourseCardContainer/CourseCardContainer";
import "./ProfessorPage.scss";
const ProfessorPage = ({ professors }) => {
  const { professorId } = useParams();
  const professor = professors.filter(
    (professor) => professor.uuid == professorId
  )[0];

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
  return (
    professor && (
      <div className="profCard">
        <img src={`${professor.idImage}`} alt="photo" srcSet="" />
        <div>
          {professor.fullName}
          <br /> {professor.email}
        </div>
        <div>{professor.school}</div>
        <div className="courseCards">
          <CourseCardContainer courses={courses} />
        </div>
      </div>
    )
  );
};

export default ProfessorPage;
