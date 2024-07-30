import { useContext } from "react";
import { MailIcon } from "../shared/icons/mail";
import { PhoneIcon } from "../shared/icons/phone";
import { LocationIcon } from "../shared/icons/position";
import "./style.css";
import { DataContext } from "../../contexts/dataContext";
import { ItemPersonnalInfo } from "./item-personnal-info";

export const Cv = () => {
  const { data } = useContext(DataContext);
  const {
    personalDetails: { fullname, email, address, phone },
  } = data;

  return (
    <>
      <section className="wrapper-personnalInfo">
        <div>
          <h1>{fullname}</h1>
        </div>
        <div className="wrapper-subPersonnalInfo">
          <ItemPersonnalInfo label={email} IconComponent={MailIcon} />
          <ItemPersonnalInfo label={address} IconComponent={LocationIcon} />
          <ItemPersonnalInfo label={phone} IconComponent={PhoneIcon} />
        </div>
      </section>
    </>
  );
};
