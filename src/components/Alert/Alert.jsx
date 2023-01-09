import { Link } from "react-router-dom";
import { AlertContainer } from "./Alert.styles";

const Alert = () => {
  return (
    <AlertContainer>
      <p>
        Ozanam Inn is hiring!
        <Link to="/employment">Join Our Team &rarr;</Link>
      </p>
    </AlertContainer>
  );
};

export default Alert;
