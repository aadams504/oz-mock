import React from "react";

import { Overlay } from "../component.styles";

import {
  HeroContainer,
  HeroInfoContainer,
  HeroLogoContainer,
} from "./Hero.styles";

import Logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <HeroContainer>
      <Overlay>
        <HeroInfoContainer>
          <p>Hello World</p>
        </HeroInfoContainer>
        <HeroLogoContainer>
          <img src={Logo} />
          <h1>Serving the Homeless</h1>
          <p>Since 1955</p>
        </HeroLogoContainer>
      </Overlay>
    </HeroContainer>
  );
};

export default Hero;
