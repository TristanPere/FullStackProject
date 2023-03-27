import React from "react";

const CheckBox = ({handleClick}) => {
  return (
    <div>
      <label htmlFor="available">Available</label>
      <input type={"checkbox"} id="available" onChange={handleClick}/>
    </div>
  );
};

export default CheckBox;
