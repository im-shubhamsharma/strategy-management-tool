import React from "react";
import "./FilterBox.scss";

const FilterBox = (props) => {
  const { count, name, bgColor, color, icon } = props.type;

  const style = { backgroundColor: bgColor, color: color };

  return (
    <button style={style} className="filterbox">
      <div>
        <h1>{count}</h1>
        <p>{name}</p>
      </div>
      <img src={icon} />
    </button>
  );
};

export default FilterBox;
