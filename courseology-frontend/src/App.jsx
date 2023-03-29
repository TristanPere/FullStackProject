import "./App.scss"; //rafce to generate new componenets
import CoursesPage from "./Pages/CoursesPage/coursesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseCardPage from "./Pages/CourseCardPage/CourseCardPage";
import TitleBar from "./Components/TitleBar/titleBar";
import { useEffect, useState } from "react";
function App() {
  const [courses, setCourses] = useState([]);
  const [professors, setProfessors] = useState([]);
  const getCourses = async () => {
    let url = `http://localhost:8080/courses?limit=50`;
    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };
  const getProfessors = async () => {
    let url = `http://localhost:8080/professors?limit=50`;
    const res = await fetch(url);
    const data = await res.json();
    setProfessors(data);
  };
  useEffect(() => {
    getCourses();
    getProfessors();
  }, []);
  console.log(courses);
  console.log(professors);
  return (
    <Router>
      <div className="App">
        <TitleBar />
        <Routes>
          <Route path="/course" element={<CourseCardPage />}></Route>
          <Route path="/" element={<CoursesPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
