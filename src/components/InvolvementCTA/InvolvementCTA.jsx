import React from "react";
import { CtaContainer, CtaImageContainer } from "./InvolvementCTA.styles";

import VolunteerCTA from "../../assets/volunteer-cta.jpeg";
import DonateCTA from "../../assets/donate-cta.jpeg";
import BequestsCTA from "../../assets/bequests-cta.jpeg";
import ServicesCTA from "../../assets/award.jpeg";
import { SectionContainer } from "../component.styles";

const InvolvementCTA = () => {
  return (
    <SectionContainer style={{ justifyContent: "center" }}>
      <CtaContainer>
        <CtaImageContainer>
          <img src={VolunteerCTA} />
        </CtaImageContainer>
        <CtaImageContainer>
          <img src={DonateCTA} />
        </CtaImageContainer>
        <CtaImageContainer>
          <img src={BequestsCTA} />
        </CtaImageContainer>
        <CtaImageContainer>
          <img src={ServicesCTA} />
        </CtaImageContainer>
      </CtaContainer>
    </SectionContainer>
  );
};

export default InvolvementCTA;
