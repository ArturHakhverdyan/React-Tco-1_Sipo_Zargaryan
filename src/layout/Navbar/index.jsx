
import { NAVBAR_LINKS } from "../../consts";
import { NavItemPrivate } from "./NavItemPrivate";
import { NavItemPublic } from "./NavItemPublic";
import { NavItemAuth } from "./NavItemAuth";
import "./styles.css";

const { project, contact, aboutMe, registration, login } = NAVBAR_LINKS;

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavItemPrivate label={aboutMe.label} link={aboutMe.link} />
        <NavItemPrivate label={project.label} link={project.link} />

        <NavItemPublic label={contact.label} link={contact.link} />

        <NavItemAuth label={registration.label} link={registration.link} />
        <NavItemAuth label={login.label} link={login.link} />
      </ul>
    </nav>
  )
}

