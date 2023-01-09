import styled from "styled-components";
import { Link } from "react-router-dom";

export const AlertContainer = styled.div`
  position: relative;
  margin-bottom: 0;
  padding: 0.01rem 0.4rem;
  background-color: #3b69dd;
  color: #fff;
  p {
    text-align: center;
    font-size: 0.86rem;
    line-height: 0.5rem;
    font-weight: bold;
  }
  Link {
    text-decoration-line: underline;
    padding-left: 0.6rem;
  }
`;
