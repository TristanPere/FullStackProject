import "./App.scss"; //rafce to generate new componenets
import CoursesPage from "./Pages/CoursesPage/coursesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseCardPage from "./Pages/CourseCardPage/CourseCardPage";
import TitleBar from "./Components/TitleBar/titleBar";
import { useState } from "react";
function App() {
  const [allCourses, setAllCourses] = useState([]);
  const getAllCourses = async () => {
    let data = [];
    let url = `localhost:8080/courses`;
    const res = await fetch(url);
    data = await res.json();
    setAllCourses(data);
  };
  getAllCourses();
  console.log(allCourses);
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
