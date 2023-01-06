import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100vw;
  height: 2rem;
  padding: 5px 10px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  background-color: #fff;
`;

export const FooterLeft = styled.div`
  max-width: 35%;
  height: 100%;
`;

export const FooterAbout = styled.p`
  margin: 1.5rem auto 1.5rem auto;
  text-align: center;
  line-height: 1.625;
`;

export const FooterMid = styled.div`
  width: 35%;
  height: 100%;
`;

export const FooterLinks = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
`;

export const FooterLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const FooterRight = styled.div`
  width: 35%;
  height: 100%;
`;
