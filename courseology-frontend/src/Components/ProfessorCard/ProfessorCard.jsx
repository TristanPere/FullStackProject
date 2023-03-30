import { React } from "react";
import "./ProfessorCard.scss";
const ProfessorCard = ({ professor }) => {
  return (
    professor && (
      <div className="professorCard">
        <img
          className="professorCard__image"
          src={`${professor.idImage}`}
          alt="photo"
        />
        <div className="professorCard__details">
          {professor.fullName}
          <br /> {professor.email}
        </div>
        <div className="professorCard__school">{professor.school}</div>
      </div>
    )
  );
};

export default ProfessorCard;
