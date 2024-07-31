import { useContext } from "react";
import { MailIcon } from "../shared/icons/mail";
import { PhoneIcon } from "../shared/icons/phone";
import { LocationIcon } from "../shared/icons/position";
import { DataContext } from "../../contexts/dataContext";
import { ItemPersonnalInfo } from "./item-personnal-info";
import { Section } from "../shared/section";
import { convertToMonthYear } from "../../services/convertToMonthYear";
import { isTheSamePeriod } from "../../services/isTheSamePeriod";

export const Resume = () => {
  const { data } = useContext(DataContext);
  const { fullname, email, address, phone } = data.personalDetails;

  return (
    <>
      {/* Top */}
      <div className="wrapper-personnalInfo">
        <div>
          <h1>{fullname}</h1>
        </div>
        <div className="wrapper-subPersonnalInfo">
          <ItemPersonnalInfo label={email} IconComponent={MailIcon} />
          <ItemPersonnalInfo label={address} IconComponent={LocationIcon} />
          <ItemPersonnalInfo label={phone} IconComponent={PhoneIcon} />
        </div>
      </div>

      <Section label="Employment History">
        <ul>
          {data.experiences.map((experience, index) => {
            const startDate = convertToMonthYear(experience.startDate);
            const endDate = convertToMonthYear(experience.endDate);
            return (
              <li className="wrapper-employment-items" key={index}>
                <div className="wrapper-employment-item">
                  <p>{isTheSamePeriod(startDate, endDate)}</p>
                  <p>{experience.location}</p>
                </div>
                <div className="wrapper-employment-item employment-sub-item">
                  <h3>{experience.companyName}</h3>
                  <h4 className="employment-positionTitle">
                    {experience.positionTitle}
                  </h4>
                  <p className="employment-description">
                    {experience.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Educations */}
      <Section label={"Educations"}>
        <div></div>
      </Section>
    </>
  );
};
