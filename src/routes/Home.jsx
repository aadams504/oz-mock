import {
  Button,
  SectionContainer,
  SectionTextContainer,
  SectionTitleContaier,
} from "../components/component.styles";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import FundraiserSection from "../components/Fundraiser/Fundraiser";

import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import InvolvementCTA from "../components/InvolvementCTA/InvolvementCTA";
import News from "../components/News/News";

const Home = () => {
  return (
    <>
      <Hero />
      <InvolvementCTA />
      <SectionContainer>
        <SectionTitleContaier>
          <h2>Welcome to Ozanam Inn</h2>
        </SectionTitleContaier>
        <SectionTextContainer>
          <p>
            At Ozanam Inn, our immediate priority is to offer aid and comfort to
            the poor and needy in our community by providing basic human needs
            such as; food, shelter, and clothing. While the foundation of our
            organization’s mission, it is only part of the work we do at Ozanam
            Inn. To end their suffering, we work with all individuals who come
            to us for assistance to move them from homelessness and hopelessness
            to independent living and a renewed feeling of HOPE. ALL services
            are free of charge and no one is turned away due to race, gender,
            creed, or social or political preferences.
          </p>
        </SectionTextContainer>
      </SectionContainer>
      <SectionContainer>
        <SectionTitleContaier>
          <h2>In the News</h2>
        </SectionTitleContaier>
        <SectionTextContainer>
          <p>
            Ozanam Inn is excited to announce our move into our NEW HOME!
            <br />
            <br />
            We are thrilled to finally be in our new home, a place where ALL are
            welcome. Aside from the many services we've offered since 1955 to
            those in need, we are beyond pleased to be able to accommodate women
            in the new facility with emergency shelter and residential programs!
          </p>
        </SectionTextContainer>
      </SectionContainer>
      <News></News>
    </>
  );
};

export default Home;
