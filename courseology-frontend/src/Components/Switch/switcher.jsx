import React from "react";
import "./switcher.scss";
const switcher = ({ leftOption, rightOption, handleSwitch }) => {
  return (
    <div className="switchBox">
      {leftOption}
      <label className="switch">
        <input type="checkbox" onClick={handleSwitch} defaultChecked />
        <span className="slider round"></span>
      </label>
      {rightOption}
    </div>
  );
};

export default switcher;
