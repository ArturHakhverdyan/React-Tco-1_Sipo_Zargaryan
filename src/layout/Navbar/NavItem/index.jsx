import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavItem = ({ label, link }) => {
  return (
    <li className={`nav-item`}>
      <NavLink
        to={`/${link}`}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {label}
      </NavLink>
    </li>
  );
};
