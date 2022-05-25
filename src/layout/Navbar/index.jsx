
import {NavItem} from "./NavItem"
import { NAVBAR_LINKS } from "../../consts";
import "./styles.css";

const { project, contact, aboutMe } = NAVBAR_LINKS;

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavItem label={aboutMe.label} link ={aboutMe.link}/>
        <NavItem label={project.label} link ={project.link}/>
        <NavItem label={contact.label} link ={contact.link}/>
      </ul>
    </nav>
  )
}
  
