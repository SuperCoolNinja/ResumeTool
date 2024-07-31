import { useContext } from "react";
import { MailIcon } from "../shared/icons/mail";
import { PhoneIcon } from "../shared/icons/phone";
import { LocationIcon } from "../shared/icons/position";
import { DataContext } from "../../contexts/dataContext";
import { ItemPersonnalInfo } from "./item-personnal-info";
import { Section } from "../shared/section";

export const Resume = () => {
  const { data } = useContext(DataContext);
  const {
    personalDetails: { fullname, email, address, phone },
  } = data;

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

      {/* Educations */}
      <Section label={"Educations"}>
        <div></div>
      </Section>

      {/* Experiences */}
      <Section label={"Experiences"}></Section>
    </>
  );
};
