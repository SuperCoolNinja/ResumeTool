import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { Input } from "../input";

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
    console.log("Data saved successfully!");
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
        <button className="btn-clear" onClick={handleClear}>
          Clear
        </button>

        <button className="btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};
