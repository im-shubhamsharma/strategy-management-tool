import React from "react";
import notStartedIcon from "../../assets/notStartedIcon.svg";
import inProgressIcon from "../../assets/inProgressIcon.svg";
import atRiskIcon from "../../assets/atRiskIcon.svg";
import completedIcon from "../../assets/completedIcon.svg";
import "./FilterBox.scss"

const FilterBox = () => {
  return (
    <div className="filterbox">
      <button className="not-started">
        <div>
          <h1>11</h1>
          <p>NOT STARTED</p>
        </div>
        <img src={notStartedIcon} />
      </button>
      <button className="in-progress">
        <div>
          <h1>3</h1>
          <p>IN PROGRESS</p>
        </div>
        <img src={inProgressIcon} />
      </button>
      <button className="at-risk">
        <div>
          <h1>2</h1>
          <p>At Risk</p>
        </div>
        <img src={atRiskIcon} />
      </button>
      <button className="completed">
        <div>
          <h1>21</h1>
          <p>Completed</p>
        </div>
        <img src={completedIcon} />
      </button>
    </div>
  );
};

export default FilterBox;
