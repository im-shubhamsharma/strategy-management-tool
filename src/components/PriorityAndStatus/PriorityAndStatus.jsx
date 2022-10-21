import "./PriorityAndStatus.scss";

export const Priority = (props) => {
  const { Icon, type, color } = props.variant;
  return (
    <div className="priority">
      <span style={{ backgroundColor: color }}>{<Icon />}</span>{" "}
      <p style={{ color: color }}>{type}</p>
    </div>
  );
};

export const Status = (props) => {
  const { type, bgColor, color } = props.variant;
  return (
    <div style={{ backgroundColor: bgColor }} className="status">
      <p style={{ color }}> {type}</p>
    </div>
  );
};

export const Score = (props) => {
  const { curr, total } = props.score;
  const percentage = (curr / total) * 100;
  const width = (percentage*79)/100;

  let color;
  if (percentage <= 25) {
    color = "red";
  } else if (percentage > 25 && percentage < 50) {
    color = "rgb(255, 158, 25)";
  } else if (percentage >= 50){
    color = "rgb(85, 181, 131)";
  }

  return (
    <div className="score">
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "10px",
          width: width,
          borderRadius: "10px 0 0 10px",
          backgroundColor: color,
        }}
      ></span>
    </div>
  );
};
