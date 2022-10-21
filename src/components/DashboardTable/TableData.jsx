import React from "react";
import greenIcon from "../../assets/greenCheckmark.svg";
import yellowIcon from "../../assets/yellowStairs.png";
import { Priority, Score, Status } from "../PriorityAndStatus/PriorityAndStatus";

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
      <td>
        <Priority variant={priority} />
      </td>
      <td>
        <Status variant={status} />
      </td>
      <td className="assigned">
        <span>
          <img src={assigned.avatar} />
        </span>
        <span>{assigned.name}</span>
      </td>
      <td>
        <span>
          <strong>{score.curr}</strong>/{score.total}
        </span>
        <Score score={score}/>
      </td>
      <td>---</td>
    </tr>
  );
};

export default TableData;
