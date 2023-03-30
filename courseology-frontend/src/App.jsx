import "./App.scss"; //rafce to generate new componenets
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseCardPage from "./Pages/CoursePage/CoursePage";
import TitleBar from "./Components/TitleBar/titleBar";
import { useEffect, useState } from "react";
import ProfessorCardsPage from "./Pages/ProfessorCardsPage/ProfessorCardsPage";
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
  return (
    <Router>
      <div className="App">
        <TitleBar />
        <Routes>
          <Route path="/courses" element={<CourseCardPage />}></Route>
          <Route path="/" element={<CoursesPage courses={courses} />}></Route>
          <Route
            path="/professors"
            element={<ProfessorCardsPage professors={professors} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
