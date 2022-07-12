import { AuthLoginHoc } from "../../../hoc/AuthLogin";
import { NavItem } from "../NavItem";

const NavItemPrivateChild = ({ label, link, isLogedInUser }) => {
  if (!isLogedInUser) {
    return null;
  }
  else {return <NavItem label={label} link={link} />;}

  
};

export const NavItemPrivate = (props) => {
  return <AuthLoginHoc Component={NavItemPrivateChild} {...props} />;
};
