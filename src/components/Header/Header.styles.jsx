import styled from "styled-components";
import HeaderImg from "../../assets/header-bg.jpeg";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: -1.3rem;
  text-align: center;
  background-image: url(${HeaderImg});
  background-position: center;
  /* background-size: cover; */
  h2 {
    color: #fff;
    margin-top: 1rem;
    padding-top: 10rem;
    font-size: 5rem;
  }
`;
