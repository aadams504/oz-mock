import { Overlay } from "../component.styles";
import { HeaderContainer } from "./Header.styles";

const Header = ({ title }) => {
  return (
    <Overlay>
      <HeaderContainer>
        <h2>{title}</h2>
      </HeaderContainer>
    </Overlay>
  );
};

export default Header;
