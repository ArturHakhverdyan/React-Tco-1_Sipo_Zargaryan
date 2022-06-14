
import {NavItem} from "./NavItem"
import { NAVBAR_LINKS } from "../../consts";
import "./styles.css";

const { project, contact, aboutMe ,registration,login} = NAVBAR_LINKS;

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavItem label={aboutMe.label} link ={aboutMe.link}/>
        <NavItem label={project.label} link ={project.link}/>
        <NavItem label={contact.label} link ={contact.link}/>
        <NavItem label={registration.label} link={registration.link} />
        <NavItem label={login.label} link={login.link} />
      </ul>
    </nav>
  )
}
  
