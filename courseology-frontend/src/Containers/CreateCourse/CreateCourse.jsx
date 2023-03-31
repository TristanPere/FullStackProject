import "./CreateCourse.scss";
import CourseForm from "../../Components/CourseForm/CourseForm";

const CreateCourse = () => {
  /* 
    1. CAN YOU SEND THE course TO YOUR API TO ADD IT TO YOUR DATABASE?
    - WHICH ENDPOINT WILL YOU USE?
    - WHAT HTTP METHOD ADDS A NEW course?
    - HOW CAN YOU ADD A BODY TO A REQUEST?
  */
  const handleSubmit = async (course) => {
    const result = await fetch("http://localhost:8080/courses/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    console.log(result);
  };

  const defaultFormState = {
    courseTitle: "",
    professor: "",
    startDate: "",
    endDate: "",
    season: "",
    description: "",
    studyType: "",
    totalSeats: "",
    contactHours: "",
    school: "",
  };

  return (
    <section className="create-course">
      <h2 className="create-course__title">Create a Course</h2>
      <CourseForm
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New Course"
      />
    </section>
  );
};

export default CreateCourse;
