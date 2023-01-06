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
