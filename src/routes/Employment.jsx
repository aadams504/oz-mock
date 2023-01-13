import React from "react";
import {
  SectionContainer,
  SectionTextContainer,
  SectionTitleContaier,
} from "../components/component.styles";

const Employment = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitleContaier>
          <h2>Employment</h2>
        </SectionTitleContaier>
        <SectionTextContainer>
          <p>
            <h2>Current Openings:</h2>
            <h3>NIGHT MANAGER - MEN'S AREA</h3>
            Ozanam Inn, a non-profit homeless shelter and service provider, is
            in search of a full-time Night Manager for our Men's Dormitory area.
            The Night Manager is responsible for services rendered to male
            residents and guests of Ozanam Inn and for the operation of the
            facility during night hours. This shift is scheduled for 4 PM – 8 AM
            and will alternate with 2 other managers to equal 80 hours/pay
            period (2 weeks). Reports to the Deputy Directors.
            <span>Key Duties and Responsibilities: </span>
            <ul>
              <li>Supervises the registration of overnight guests</li>
              <li>Supervises the distribution of meals</li>
              <li>Monitors the front office</li>
              <li>Coordinates with on-site medical clinics</li>
              <li>
                Makes hourly rounds of the entire supervised area, monitors the
                security of the building and residents, takes temperature
                readings of freezers and coolers
              </li>
              <li>
                Responsible that Emergency and Fire Evacuation plans are carried
                out when necessary Distributes medications as needed
              </li>
              <li>
                Coordinates, with the appropriate managers; fire drills, regular
                fire safety inspections of building, grounds, and fire
                prevention procedures and equipment.
              </li>
              <li>
                Performs other job-related duties as directed by the Deputy
                Directors and/or CEO
              </li>
              <li>Must pass a background check and drug test</li>
            </ul>
            Compensation is $15/hour and includes benefits; Health insurance,
            Dental insurance, Vision insurance, Paid time off, 401(k), and
            401(k) matching. Please submit job experience/resume to:
            rblanche@ozanaminn.org
          </p>
        </SectionTextContainer>
      </SectionContainer>
    </>
  );
};

export default Employment;
