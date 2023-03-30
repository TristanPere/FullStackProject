import React from "react";
import ProfessorCardContainer from "../../Containers/ProfessorCardContainer/ProfessorCardContainer";
const ProfessorCardsPage = ({ professors }) => {
  return (
    <div>
      <ProfessorCardContainer professors={professors} />
    </div>
  );
};

export default ProfessorCardsPage;
