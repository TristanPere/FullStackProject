import React from "react";
import { Link } from "react-router-dom";
import "./ProfessorCard.scss";
const ProfessorCard = ({ professor }) => {
  return (
    professor && (
      <div className="professorCard">
        <Link to={`/professor/${professor.uuid}`}>
          <img
            className="professorCard__image"
            src={`${professor.idImage}`}
            alt="photo"
          />
        </Link>
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
