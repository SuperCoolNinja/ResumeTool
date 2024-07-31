import { useContext } from "react";
import { MailIcon } from "../shared/icons/mail";
import { PhoneIcon } from "../shared/icons/phone";
import { LocationIcon } from "../shared/icons/position";
import { DataContext } from "../../contexts/dataContext";
import { ItemPersonalInfo } from "./item-personal-info";
import { Section } from "../shared/section";
import { convertToMonthYear } from "../../services/convertToMonthYear";
import { Summary } from "./summary";
import { Details } from "./details";

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
          <ItemPersonalInfo label={email} IconComponent={MailIcon} />
          <ItemPersonalInfo label={address} IconComponent={LocationIcon} />
          <ItemPersonalInfo label={phone} IconComponent={PhoneIcon} />
        </div>
      </div>

      <Section label="Employment History">
        <ul>
          {data.experiences.map((experience, index) => {
            const startDate = convertToMonthYear(experience.startDate);
            const endDate = convertToMonthYear(experience.endDate);
            return (
              <li className="wrapper-items" key={index}>
                <Summary
                  startDate={startDate}
                  endDate={endDate}
                  location={experience.location}
                />
                <Details
                  description={experience.description}
                  positionTitle={experience.positionTitle}
                  postTitle={experience.companyName}
                />
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Educations */}
      <Section label={"Educations"}>
        <ul>
          {data.educations.map((experience, index) => {
            const startDate = convertToMonthYear(experience.startDate);
            const endDate = convertToMonthYear(experience.endDate);
            return (
              <li className="wrapper-items" key={index}>
                <Summary
                  startDate={startDate}
                  endDate={endDate}
                  location={experience.location}
                />
                <Details
                  description={experience.degree}
                  postTitle={experience.school}
                />
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
};
