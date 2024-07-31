import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { Input } from "../shared/input";
import { Button } from "../shared/button";

export const PersonalDetailsCard = () => {
  const { data, setData } = useContext(DataContext);
  const [formState, setFormState] = useState(data.personalDetails);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [id]: value,
    }));
  };

  const handleClear = () => {
    setFormState({
      fullname: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      personalDetails: formState,
    }));
  };

  return (
    <>
      <Input
        labelName="Full Name"
        id="fullname"
        type="text"
        value={formState.fullname}
        onChange={handleChange}
        error={() => {}}
      />
      <Input
        labelName="Email"
        id="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        error={() => {}}
      />
      <Input
        labelName="Address"
        id="address"
        type="text"
        value={formState.address}
        onChange={handleChange}
        error={() => {}}
      />
      <Input
        labelName="Phone"
        id="phone"
        type="tel"
        value={formState.phone}
        onChange={handleChange}
        error={() => {}}
      />

      <div className="wrapper-btn">
        <Button label={"Clear"} handle={handleClear} style={"btn-clear"} />
        <Button label={"Save"} handle={handleSave} style={"btn-save"} />
      </div>
    </>
  );
};
