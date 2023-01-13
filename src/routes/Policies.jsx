import React from "react";
import {
  SectionContainer,
  SectionTextContainer,
  SectionTitleContaier,
} from "../components/component.styles";

const Policies = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitleContaier>
          <h2>Policies</h2>
        </SectionTitleContaier>
        <SectionTextContainer>
          <p>
            <h3>Open Service Policy</h3>
            It is the policy of Ozanam Inn to admit and treat all seeking
            assistance for service at Ozanam Inn with equality and to render
            services free of charge regardless of gender, race, creed religion,
            sexual orientation, national origin, ancestry, citizenship, color,
            or handicap. The purpose of Ozanam Inn is to provide an environment
            of loving concern and caring, of shelter and nourishment, to serve
            the homeless in a manner that does not diminish but rather preserves
            and promotes the selfhood and dignity of the needy and oppressed.
            All persons, agencies, or organizations that have occasion either to
            refer clients or recommend Ozanam Inn are advised to do so in
            accordance with the policy stated above.
          </p>
        </SectionTextContainer>
        <SectionTextContainer>
          <p>
            <h3>Neighborhood Relations</h3>
            Ozanam Inn supports a Neighborhood Relations Program. The
            Administration will explore complaints towards its operations from
            its neighborhood citizens and take appropriate steps to resolve
            them. Our team goes out daily to clean sidewalks and streets in the
            vicinity of the Inn, and tighten security in the area. In all
            instances, a record of complaints shall be filed in the
            Administration Offices, unresolved complaints will be presented to
            the Board of Directors for resolution.
          </p>
        </SectionTextContainer>
      </SectionContainer>
    </>
  );
};

export default Policies;
