import "./App.scss"; //rafce to generate new componenets
import CoursesPage from "./Pages/CoursesPage/coursesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseCardPage from "./Pages/CourseCardPage/CourseCardPage";
import TitleBar from "./Components/TitleBar/titleBar";
function App() {
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
