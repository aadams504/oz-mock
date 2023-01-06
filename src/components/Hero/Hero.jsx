import React from "react";
import {
  HeroContainer,
  HeroInfoContainer,
  HeroLogo,
  HeroLogoContainer,
  HeroOverlay,
  HeroSubtitle,
  HeroTitle,
} from "./Hero.styles";

import Logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroOverlay>
        <HeroInfoContainer>
          <p>Hello World</p>
        </HeroInfoContainer>
        <HeroLogoContainer>
          <HeroLogo src={Logo} />
          <HeroTitle>Serving the Homeless</HeroTitle>
          <HeroSubtitle>Since 1955</HeroSubtitle>
        </HeroLogoContainer>
      </HeroOverlay>
    </HeroContainer>
  );
};

export default Hero;
