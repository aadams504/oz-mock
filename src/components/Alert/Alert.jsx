import React from "react";
import { AlertContainer, AlertLink, AlertMessage } from "./Alert.styles";

const Alert = () => {
  return (
    <AlertContainer>
      <AlertMessage>
        Ozanam Inn is hiring!
        <AlertLink to="/employment">Join Our Team &rarr;</AlertLink>
      </AlertMessage>
    </AlertContainer>
  );
};

export default Alert;
