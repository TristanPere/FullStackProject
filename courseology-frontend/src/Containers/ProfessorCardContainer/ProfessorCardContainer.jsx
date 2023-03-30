import React from "react";
import ProfessorCard from "../../Components/ProfessorCard/ProfessorCard";
import "./ProfessorCardContainer.scss";
const ProfessorCardContainer = ({ professors }) => {
  const professorCardsJSX = professors.map((professor, index) => {
    return (
      <div className="cardHolder" key={professor.uuid}>
        <ProfessorCard professor={professor} />
      </div>
    );
  });

  return <div className="professorsContainer">{professorCardsJSX}</div>;
};

export default ProfessorCardContainer;
