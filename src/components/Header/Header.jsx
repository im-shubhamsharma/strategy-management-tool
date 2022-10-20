import React from "react";
import gridIcon from "../../assets/grid.png";
import notificationIcon from "../../assets/notificationIcon.svg";
import { ArrowDown } from "../../utils/navItems";
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left-section">
        <img src={gridIcon} alt="grid icon" />
      </div>
      <div className="header-right-section">
        <ul>
          <li>
            <h4>About</h4> <ArrowDown />{" "}
          </li>
          <li>
            <img src={notificationIcon} alt="notification Icon" />
          </li>

          <li>
            <p>Shubham Sharma</p>
            <span>S</span>
            <ArrowDown />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
