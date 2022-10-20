import React from "react";
import greenIcon from "../../assets/greenCheckmark.svg";
import yellowIcon from "../../assets/yellowStairs.png";

const TableData = (props) => {
  const {
    type,
    name,
    goal,
    desc,
    fromDate,
    dueDate,
    priority,
    status,
    assigned,
    score,
  } = props.item;

  let icon;
  if (type.toLowerCase() == "green") {
    icon = greenIcon;
  } else {
    icon = yellowIcon;
  }

  return (
    <tr>
      <td>
        <img src={icon} />
      </td>
      <td>
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div>{desc}</div>
      </td>
      <td>{goal}</td>
      <td>{fromDate}</td>
      <td>{dueDate}</td>
      <td>{priority}</td>
      <td>{status}</td>
      <td class="assigned">
        <span>{assigned.name.slice(0,1)}</span>
        <span>{assigned.name}</span>
      </td>
      <td>
        <strong>{score.curr}</strong>/{score.total}
      </td>
      <td>---</td>
    </tr>
  );
};

export default TableData;
