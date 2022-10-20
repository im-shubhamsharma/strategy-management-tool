import React, { useRef, useState } from "react";
import { ArrowDown, ArrowRight } from "../../utils/navItems";
import "./NavItem.scss";

const NavItem = (props) => {
  const { id, name, logo, subList } = props.item;

  const [enter, setEnter] = useState(false);
  const navItemRef = useRef(null);

  const toggleNavItem = () => {
      setEnter(prev => !prev);
      navItemRef.current.classList.toggle("active");
  }

  return (
    <div ref={navItemRef} className="nav-item">
      {/* Nav Item Icon */}
      <div className="icon" onClick={toggleNavItem}>
        <img src={logo} />
      </div>

      {/* Nav Item Name */}
      <div className="name">
        <h4 onClick={toggleNavItem}>{name}</h4>
        {subList.map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
      </div>

      {/* Nav Item Arrow */}
      <div className="arrow" onClick={toggleNavItem}>
        {!enter && <ArrowRight />}
        {enter && <ArrowDown />}
      </div>
    </div>
  );
};

export default NavItem;
