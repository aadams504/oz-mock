import styled from "styled-components";

export const NewsletterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SignupContainer = styled.div`
  width: 70%;
  height: 25vh;
  background-color: aqua;
  margin-top: -5.5%;
  display: flex;
  justify-content: center;
  background-color: #3b69dd;
`;

export const SignupForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextField = styled.input.attrs({
  type: "text",
  name: "name",
  placeholder: "Name",
})`
  padding: 6px 0;
  color: black;
  display: flex;
  margin-bottom: 15px;
`;

export const EmailField = styled.input.attrs({
  type: "email",
  name: "email",
  placeholder: "Email",
})`
  padding: 6px 0;
  color: black;
  display: flex;
`;

export const FormLabel = styled.label`
  color: #000;
`;

export const NewsletterImgContainer = styled.div`
  width: 60%;
  display: flex;
`;
