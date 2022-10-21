import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container">
        <Header />
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Urgent />
        </div> */}
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
