import React from "react";
import "./FilterButton.scss";

const FilterButton = (props) => {
  return (
    <button className="filter-button">
      {props.title} {props.icon && <img src={props.icon} />}
    </button>
  );
};

export default FilterButton;
