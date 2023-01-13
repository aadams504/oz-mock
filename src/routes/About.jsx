import { Outlet, Link } from "react-router-dom";
import {
  DisplayContainer,
  SectionContainer,
  SectionTitleContaier,
  SectionTextContainer,
  QuoteText,
  Button,
  PageNavigation,
} from "../components/component.styles";
import Header from "../components/Header/Header";

const About = () => {
  return (
    <>
      <Header title="About Us" />
      <DisplayContainer>
        <SectionTitleContaier>
          <h2>Our Mission</h2>
        </SectionTitleContaier>
        <SectionTextContainer>
          <p>
            <QuoteText>
              <br />
              "Yours must be a work of love, of kindness, you must give your
              time, your talents, yourselves. The poor person is a unique person
              of God’s fashioning with an inalienable right to respect. You must
              not be content with tiding the poor over the poverty crisis; You
              must study their condition and the injustices which brought about
              such poverty, with the aim of a long term improvement."
            </QuoteText>
            <br />
            We, at Ozanam Inn, commit ourselves to the ideals as stated by our
            patron, Blessed Frederic Ozanam. In keeping with the gospel mandate
            of charity, we shall accept the challenge and offer food, shelter,
            compassion and hope to those in need in our society, as their
            servant.
          </p>
        </SectionTextContainer>
      </DisplayContainer>
      <PageNavigation>
        <Button>
          <Link to="/about/history">History</Link>
        </Button>
        <Button>
          <Link to="/about/policies">Policies</Link>
        </Button>
        <Button>
          <Link to="/about/organization">Organization</Link>
        </Button>
        <Button>
          <Link to="/about/sponsors">Sponsors</Link>
        </Button>
        <Button>
          <Link to="/about/employment">Employment</Link>
        </Button>
      </PageNavigation>
      <SectionContainer>
        <h3>At Ozanam Inn, We Are Servants of the Poor</h3>
        <Outlet />
      </SectionContainer>
    </>
  );
};

export default About;
