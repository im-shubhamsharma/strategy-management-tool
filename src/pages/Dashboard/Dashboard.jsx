import React from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import FilterButton from "../../components/FilterButton/FilterButton";
import filterIcon from "../../assets/filter.svg";
import DashboardTable from "../../components/DashboardTable/DashboardTable";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
        <button>+</button>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-filterbox-container">
          <FilterBox />
        </div>
        {/* Dashboard Filters */}
        <div className="dashboard-filter-container">
          <FilterButton title="Draft" />
          <FilterButton title="Active" />
          <FilterButton title="Archieve" />
          <FilterButton title="Filters" icon={filterIcon} />
        </div>
        {/* Table Container */}
        <div className="dashboard-table-container">
          <div className="table-switch-button">
            <FilterButton title="My Objectives (4)" />
            <FilterButton title="Team Objectives (5)" />
            <FilterButton title="Organization Objectives (23)" />
          </div>
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
                <input type="text" placeholder="search" />
              </div>
            </div>

            {/* Table Starts Here */}
            <DashboardTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
