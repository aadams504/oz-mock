import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  position: fixed;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0 25px;
`;

export const Logo = styled.img`
  max-width: 6.2rem;
`;

export const NavLinks = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 25px;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
