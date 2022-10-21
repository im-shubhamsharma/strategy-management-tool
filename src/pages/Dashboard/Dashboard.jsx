import React, { useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import FilterButton from "../../components/FilterButton/FilterButton";
import filterIcon from "../../assets/filter.svg";
import DashboardTable from "../../components/DashboardTable/DashboardTable";
import styles from "../../styles/_export.module.scss";
/* Icons for Filter Box Starts */
import notStartedIcon from "../../assets/notStartedIcon.svg";
import inProgressIcon from "../../assets/inProgressIcon.svg";
import atRiskIcon from "../../assets/atRiskIcon.svg";
import completedIcon from "../../assets/completedIcon.svg";
/* Icons for Filter Box Ends */
import "./Dashboard.scss";
import TabsButton from "../../components/TabsButton/TabsButton";
import { HiOutlineSearch } from "react-icons/hi";

const Dashboard = () => {
  /* Dashboard Table Tabs state and function starts */
  const [tableTabs, setTableTabs] = useState({
    myObjective: true,
    teamObjective: false,
    organizationObjective: false,
  });

  const switchTabs = (e) => {
    const { value } = e.target;
    setTableTabs((prev) => {
      let newObj = {};
      for (let key in prev) {
        key === value ? (newObj[key] = true) : (newObj[key] = false);
      }
      return newObj;
    });
  };
  /* Dashboard Table Tabs state and function ends */

  return (
    <div className="dashboard-container">
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
        <button>+</button>
      </div>

      <div className="dashboard-content">
        {/* FilterBox for dashboard starts */}
        <div className="dashboard-filterbox-container">
          <FilterBox
            type={{
              count: 11,
              name: "not started",
              icon: notStartedIcon,
              bgColor: styles.bgGray,
              color: styles.textGray,
            }}
          />
          <FilterBox
            type={{
              count: 3,
              name: "in progress",
              icon: inProgressIcon,
              bgColor: styles.bgBlue,
              color: styles.textBlue,
            }}
          />
          <FilterBox
            type={{
              count: 2,
              name: "at risk",
              icon: atRiskIcon,
              bgColor: styles.bgRed,
              color: styles.textRed,
            }}
          />
          <FilterBox
            type={{
              count: 21,
              name: "completed",
              icon: completedIcon,
              bgColor: styles.bgGreen,
              color: styles.textGreen,
            }}
          />
        </div>
        {/* FilterBox for dashboard send */}
        {/* Dashboard Filters Starts */}
        <div className="dashboard-filter-container">
          <FilterButton title="Draft" />
          <FilterButton title="Active" />
          <FilterButton title="Archieve" />
          <FilterButton title="Filters" icon={filterIcon} />
        </div>
        {/* Dashboard Filters ends */}
        {/* Table Container Starts */}
        <div className="dashboard-table-container">
          {/* Table Tabs Switch Starts */}
          <div className="table-switch-button">
            <TabsButton
              switchTabs={switchTabs}
              value="myObjective"
              selected={tableTabs.myObjective}
              title="My Objectives"
              count="4"
            />
            <TabsButton
              switchTabs={switchTabs}
              value="teamObjective"
              selected={tableTabs.teamObjective}
              title="Team Objectives"
              count="5"
            />
            <TabsButton
              switchTabs={switchTabs}
              value="organizationObjective"
              selected={tableTabs.organizationObjective}
              title="Organization Objectives"
              count="23"
            />
          </div>
          {/* Table Tabs Switch Ends */}
          <div className="table-sub-container">
            {/* Table Pagination and Search Here */}
            <div className="table-pagination-search">
              <div className="table-pagination">
                <label>
                  Show&nbsp;&nbsp;
                  <select>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>1520</option>
                  </select>
                  &nbsp;&nbsp;Entries
                </label>
              </div>
              <div className="table-searchbar">
                <HiOutlineSearch />
                <input type="text" placeholder="Search" />
              </div>
            </div>

            {/* Table Starts Here */}
            <DashboardTable />
          </div>
        </div>
        {/* Table Container Ends */}
      </div>
    </div>
  );
};

export default Dashboard;
