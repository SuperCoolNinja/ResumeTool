import { useContext } from "react";
import { MailIcon } from "../shared/icons/mail";
import { PhoneIcon } from "../shared/icons/phone";
import { LocationIcon } from "../shared/icons/position";
import "./style.css";
import { DataContext } from "../../contexts/dataContext";

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
          <div className="wrapper-itemsIconPersonnal">
            <MailIcon />
            <p>{email}</p>
          </div>

          <div className="wrapper-itemsIconPersonnal">
            <LocationIcon />
            <p>{address}</p>
          </div>

          <div className="wrapper-itemsIconPersonnal">
            <PhoneIcon />
            <p>{phone}</p>
          </div>
        </div>
      </section>
    </>
  );
};
