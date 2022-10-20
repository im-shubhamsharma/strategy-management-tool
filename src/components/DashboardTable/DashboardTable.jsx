import React from "react";
import { demoData } from "../../utils/demoData";
import TableData from "./TableData";
import "./DashboardTable.scss";

const Help = () => {
  return (
    <>
      <span className="help">?</span>
    </>
  );
};

const DashboardTable = () => {
  return (
    <div className="dashboard-table">
      <table>
        <thead>
          <tr>
            <th id="type">
              <span>
                Type <Help />
              </span>
            </th>
            <th id="name">
              <span>
                Name <Help />
              </span>
            </th>
            <th id="goal">
              <span>
                Goal <Help />
              </span>
            </th>
            <th id="fromdate">
              <span>
                From Date <Help />
              </span>
            </th>
            <th id="duedate">
              <span>
                Due Date <Help />
              </span>
            </th>
            <th id="priority">
              <span>
                Priority <Help />
              </span>
            </th>
            <th id="status">
              <span>
                Status <Help />
              </span>
            </th>
            <th id="assigned">
              <span>
                Assigned to <Help />
              </span>
            </th>
            <th id="score">
              <span>
                Score <Help />
              </span>
            </th>
            <th id="actions">
              <span>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {demoData.map((item) => (
            <TableData key={item.assigned.name} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
