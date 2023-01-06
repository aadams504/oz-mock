import { HeaderContainer, PageTitle } from "./Header.styles";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <PageTitle>{title}</PageTitle>
    </HeaderContainer>
  );
};

export default Header;
