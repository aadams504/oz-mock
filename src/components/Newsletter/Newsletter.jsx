import {
  EmailField,
  FormLabel,
  NewsletterContainer,
  NewsletterImgContainer,
  SignupContainer,
  SignupForm,
  TextField,
} from "./Newsletter.styles";

import { Button } from "../component.styles";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <SignupContainer>
        <SignupForm>
          <div>
            <FormLabel>Name</FormLabel>

            <TextField />
            <FormLabel>Email</FormLabel>
            <EmailField />

            <Button>Submit</Button>
          </div>
        </SignupForm>
        <NewsletterImgContainer>Hello</NewsletterImgContainer>
      </SignupContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;
