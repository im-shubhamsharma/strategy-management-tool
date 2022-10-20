import React from "react"
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.scss"

const App = () => {
  return <div className="app">
     <Sidebar />
     <div className="main-container">
       <Header />
       <Dashboard />
     </div>
  </div>;
}

export default App;
