import {
  FooterContainer,
  FooterLink,
  FooterLeft,
  FooterRight,
  FooterMid,
  FooterAbout,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterAbout>
          Ozanam Inn is a non-profit, direct service agency serving the homeless
          and underserved of Greater New Orleans, regardless of gender, race,
          color, creed, religious preference, or national origin. All of our
          services are provided free of charge. The Inn was established in 1955
          by the Society of St. Vincent de Paul and is named in honor of
          Frederick Ozanam, who founded the Society in 1852.
        </FooterAbout>
      </FooterLeft>
      <FooterMid>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
        <FooterLink>About Us</FooterLink>
      </FooterMid>
    </FooterContainer>
  );
};

export default Footer;
