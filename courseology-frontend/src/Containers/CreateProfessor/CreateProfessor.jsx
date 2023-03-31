import "./CreateProfessor.scss";
import ProfessorForm from "../../Components/ProfessorForm/ProfessorForm";

const CreateProfessor = () => {
  const handleSubmit = async (professor) => {
    const result = await fetch("http://localhost:8080/professors/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(professor),
    });
    console.log(result);
  };

  const defaultFormState = {
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    courses: "",
    pre_nominals: "",
    idImage: "",
  };

  return (
    <section className="create-professor">
      <h2 className="create-professor__title">Create a professor</h2>
      <ProfessorForm
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New professor"
      />
    </section>
  );
};

export default CreateProfessor;
