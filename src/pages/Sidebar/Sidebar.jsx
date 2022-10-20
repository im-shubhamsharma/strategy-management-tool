import React from "react";
import logo from "../../assets/logo.svg";
import NavItem from "../../components/NavItems/NavItem";
import { navItems } from "../../utils/navItems";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="website logo" />
      </div>

      <div className="navlist">
          {navItems.map(item => <NavItem key={item.id} item={item}/>)}
      </div>
    </div>
  );
};

export default Sidebar;
