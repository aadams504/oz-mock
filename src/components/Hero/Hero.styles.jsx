import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/src/assets/bg-img.jpg");
  background-size: cover;
  color: #fff;
  margin-top: -21.5px;
`;

export const HeroInfoContainer = styled.div`
  width: 22rem;
  height: 30rem;
  margin-top: 15%;
  margin-left: 12%;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 2%;
  color: red;
  z-index: 10;
`;

export const HeroLogoContainer = styled.div`
  max-width: 25rem;
  max-height: 20rem;
  margin-top: 18%;
  margin-left: 20%;
  border-radius: 2%;
  z-index: 10;
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    font-size: 2.2rem;
  }
  p {
    font-size: 2rem;
  }
`;
