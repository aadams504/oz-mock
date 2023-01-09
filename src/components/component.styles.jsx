import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#3b69dd" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#3b69dd")};

  font-size: 1em;
  margin: 1em;
  padding: 0.35em 1.6em;
  border: 2px solid #3b69dd;
  border-radius: 3px;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  display: flex;
  flex-direction: row;
`;

export const SectionContainer = styled.div`
  width: ${(props) => (props.cta ? "80%" : "100%")};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SectionTitleContaier = styled.div`
  width: 100%;
  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: -0.05%;
  }
`;

export const SectionTextContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    width: 90%;
    text-align: justify;
  }
`;
