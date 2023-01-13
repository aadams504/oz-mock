import { Link, Outlet } from "react-router-dom";
import { Button } from "../component.styles";
import {
  LogoContainer,
  NavContainer,
  NavLinks,
  NavLink,
} from "./Navbar.styles";

import LogoImg from "../../assets/navLogo.png";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <img src={LogoImg} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/involvement">Get Involved</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/donate">
            <Button primary>Donate</Button>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </>
  );
};

export default Navbar;
