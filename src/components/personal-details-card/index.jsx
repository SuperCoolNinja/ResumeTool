import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import { Input } from "../input";

export const PersonalDetailsInputs = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Input
        labelName="Full Name"
        id="fullname"
        type="text"
        value={data.personnalDetails.fullname}
      />
      <Input
        labelName="Email"
        id="email"
        type="email"
        value={data.personnalDetails.email}
      />
      <Input
        labelName="Address"
        id="address"
        type="text"
        value={data.personnalDetails.address}
      />
      <Input
        labelName="Phone"
        id="phone"
        type="tel"
        value={data.personnalDetails.phone}
      />
    </>
  );
};
