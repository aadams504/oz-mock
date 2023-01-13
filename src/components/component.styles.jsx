import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#3b69dd" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#3b69dd")};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.35em 1.6em;
  border: 2px solid #3b69dd;
  border-radius: 3px;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;
  display: flex;
  flex-direction: row;
`;

export const PageNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DisplayContainer = styled.div`
  width: 100%;
  background-color: #3b69dd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -2%;
`;

export const QuoteText = styled.span`
  color: #fff;
  font-family: "Playfair Display", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const SectionContainer = styled.div`
  width: 100%;
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
