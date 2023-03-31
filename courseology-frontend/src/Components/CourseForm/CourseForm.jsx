import { useState } from "react";
import "./CourseForm.scss";

const CourseForm = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [course, setCourse] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(course).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    console.log(Object.values(course));
    handleSubmit(course);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="Course Title"
          value={course.createdBy}
          onInput={(event) =>
            setCourse({ ...course, courseTitle: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Professor"
          value={course.professor}
          onInput={(event) =>
            setCourse({ ...course, professor: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Start Date"
          value={course.startDate}
          onInput={(event) =>
            setCourse({ ...course, startDate: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="End Date"
          value={course.endDate}
          onInput={(event) =>
            setCourse({ ...course, endDate: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Study Season"
          value={course.season}
          onInput={(event) =>
            setCourse({ ...course, season: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Description: 250 characters or less"
          value={course.description}
          onInput={(event) =>
            setCourse({ ...course, description: event.target.value })
          }
        />
        <select
          className="form-container__input"
          id="studyType"
          value={course.studyType}
          onInput={(event) =>
            setCourse({ ...course, studyType: event.target.value })
          }
          required
        >
          <option value="" disabled selected hidden>
            Study Type
          </option>
          <option>full-time</option>
          <option>part-time</option>
        </select>
        <input
          className="form-container__input"
          type="text"
          placeholder="Total Seats on Course"
          value={course.totalSeats}
          onInput={(event) =>
            setCourse({ ...course, totalSeats: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Weekly Contact Hours"
          value={course.contactHours}
          onInput={(event) =>
            setCourse({ ...course, contactHours: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="School"
          value={course.school}
          onInput={(event) =>
            setCourse({ ...course, school: event.target.value })
          }
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
