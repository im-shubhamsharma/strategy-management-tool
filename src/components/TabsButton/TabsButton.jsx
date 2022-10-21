import React from "react";
import "./TabsButton.scss";

const TabsButton = ({ switchTabs, title, value, count, selected }) => {
  let style = {};
  if (selected) {
    style = {
      backgroundColor: "#fff",
      color: "rgb(29, 89, 178)",
      fontWeight: "700",
      borderBottom: "1px solid #fff",
      transform: "translateY(1px)",
    };
  }

  return (
    <button
      style={style}
      value={value}
      onClick={switchTabs}
      className="tabs-button"
    >
      {title} {count && "(" + count + ")"}
    </button>
  );
};

export default TabsButton;
