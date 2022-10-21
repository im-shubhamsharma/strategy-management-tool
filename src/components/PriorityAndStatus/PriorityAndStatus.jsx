import "./PriorityAndStatus.scss";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";

export const Urgent = () => {
  return (
    <div className="priority urgent">
      <span>
        <HiOutlineChevronDoubleUp />
      </span>{" "}
      <h4>Urgent</h4>
    </div>
  );
};

export const High = () => {
  return (
    <div className="priority high">
      <span>
        <HiOutlineChevronUp />
      </span>{" "}
      High
    </div>
  );
};
