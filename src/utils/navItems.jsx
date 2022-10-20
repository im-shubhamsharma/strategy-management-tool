import dashboardIcon from "../assets/dashboardIcon.svg";
import organizationIcon from "../assets/organizationIcon.svg";
import administrationIcon from "../assets/adminIcon.svg";

export const navItems = [
  {
    id: 1,
    name: "Dashboard",
    logo: `${dashboardIcon}`,
    subList: ["Goals", "Drivers"],
  },
  {
      id: 2,
      name: "Organization",
      logo: `${organizationIcon}`,
      subList: ["Structure", "Strategic"],
    },
    {
      id: 3,
      name: "Administration",
      logo: `${administrationIcon}`,
      subList: ["Roles", "Users", "Teams"],
    },
];

export const ArrowRight = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <path
        d="M10.294 9.698a.988.988 0 010-1.407 1.01 1.01 0 011.419 0l2.965 2.94a1.09 1.09 0 010 1.548l-2.955 2.93a1.01 1.01 0 01-1.42 0 .988.988 0 010-1.407l2.318-2.297-2.327-2.307z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const ArrowDown = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <path
        d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
