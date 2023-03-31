import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CoursePage from "./Pages/CoursePage/CoursePage";
import TitleBar from "./Components/TitleBar/titleBar";
import ProfessorCardsPage from "./Pages/ProfessorCardsPage/ProfessorCardsPage";
import ProfessorPage from "./Pages/ProfessorPage/ProfessorsPage";
import CreateCourse from "./Containers/CreateCourse/CreateCourse";
import "./App.scss";
import CreateProfessor from "./Containers/CreateProfessor/CreateProfessor";

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
          <Route
            path="/courses"
            element={<CoursesPage courses={courses} />}
          ></Route>
          <Route
            path="/course/:courseId"
            element={<CoursePage courses={courses} />}
          ></Route>
          <Route
            path="/professors"
            element={<ProfessorCardsPage professors={professors} />}
          ></Route>
          <Route
            path="/professor/:professorId"
            element={<ProfessorPage professors={professors} />}
          ></Route>
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/professors/create" element={<CreateProfessor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
