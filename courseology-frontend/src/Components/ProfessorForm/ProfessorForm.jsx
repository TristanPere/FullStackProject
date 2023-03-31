import { useState } from "react";
import "./ProfessorForm.scss";

const ProfessorForm = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [professor, setprofessor] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(professor).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    console.log(Object.values(professor));
    handleSubmit(professor);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="First Name"
          value={professor.firstName}
          onInput={(event) =>
            setprofessor({ ...professor, firstName: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Last Name"
          value={professor.lastName}
          onInput={(event) =>
            setprofessor({ ...professor, lastName: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Pre Nominal(s)"
          value={professor.pre_nominals}
          onInput={(event) =>
            setprofessor({ ...professor, pre_nominals: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Email"
          value={professor.email}
          onInput={(event) =>
            setprofessor({ ...professor, email: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Profile Image URL"
          value={professor.idImage}
          onInput={(event) =>
            setprofessor({ ...professor, idImage: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Course Offered"
          value={professor.courses}
          onInput={(event) =>
            setprofessor({ ...professor, courses: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="School"
          value={professor.school}
          onInput={(event) =>
            setprofessor({ ...professor, school: event.target.value })
          }
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfessorForm;
