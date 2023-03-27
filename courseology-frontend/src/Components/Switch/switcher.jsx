import React from "react";
import "./switcher.scss"
const switcher = ({handleSwitch}) => {
  
  return (
    <div>
       Full-time
      <label className="switch">
        <input type="checkbox" onClick={handleSwitch}/>
        <span className="slider round"></span>
      </label>
       Part-time
    </div>
  );
};

export default switcher;
