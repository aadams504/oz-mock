import { Link } from "react-router-dom";
import { AlertContainer, AlertLink } from "./Alert.styles";

const Alert = () => {
  return (
    <AlertContainer>
      <p>
        Ozanam Inn is hiring!
        <AlertLink to="/employment">Join Our Team &rarr;</AlertLink>
      </p>
    </AlertContainer>
  );
};

export default Alert;
