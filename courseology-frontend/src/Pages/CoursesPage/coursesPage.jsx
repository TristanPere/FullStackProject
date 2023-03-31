import React, { useEffect, useState } from "react";
import FilterBar from "../../Components/FilterBar/FilterBar";
import CourseCardContainer from "../../Containers/CourseCardContainer/CourseCardContainer";
const CoursesPage = ({ courses }) => {
  const [filter, setFilter] = useState({
    course: "",
    school: "null",
    term: "null",
    studyType: "full-time",
    showUnAvailable: true,
  });
  const filterSchool = (event) => {
    if (event.target.value == "null") {
      setFilter({
        course: filter.course,
        school: "null",
        term: filter.term,
        studyType: filter.studyType,
        showUnAvailable: filter.showUnAvailable,
      });
    } else {
      setFilter({
        course: filter.course,
        school: event.target.value,
        term: filter.term,
        studyType: filter.studyType,
        showUnAvailable: filter.showUnAvailable,
      });
    }
  };
  const filterTerm = (event) => {
    if (event.target.value == "null") {
      setFilter({
        course: filter.course,
        school: filter.school,
        term: "null",
        studyType: filter.studyType,
        showUnAvailable: filter.showUnAvailable,
      });
    } else {
      setFilter({
        course: filter.course,
        school: filter.school,
        term: event.target.value,
        studyType: filter.studyType,
        showUnAvailable: filter.showUnAvailable,
      });
    }
  };
  const filterStudyType = (event) => {
    if (event.target.checked) {
      setFilter({
        course: filter.course,
        school: filter.school,
        term: filter.term,
        studyType: "full-time",
        showUnAvailable: filter.showUnAvailable,
      });
    } else {
      setFilter({
        course: filter.course,
        school: filter.school,
        term: filter.term,
        studyType: "part-time",
        showUnAvailable: filter.showUnAvailable,
      });
    }
  };
  const filterAvailable = (event) => {
    if (event.target.value) {
      setFilter({
        course: filter.course,
        school: filter.school,
        term: filter.term,
        studyType: filter.studyType,
        showUnAvailable: true,
      });
    } else {
      setFilter({
        course: filter.course,
        school: filter.school,
        term: filter.term,
        studyType: filter.studyType,
        showUnAvailable: false,
      });
    }
  };
  const searchCourses = (event) => {
    setFilter({
      course: event.target.value,
      school: filter.school,
      term: filter.term,
      studyType: filter.studyType,
      showUnAvailable: true,
    });
  };
  return (
    <div>
      <FilterBar
        filterSchool={filterSchool}
        filterTerm={filterTerm}
        filterStudyType={filterStudyType}
        filterAvailable={filterAvailable}
        filterCourses={searchCourses}
      />
      <CourseCardContainer courses={courses} filter={filter} />
    </div>
  );
};

export default CoursesPage;
