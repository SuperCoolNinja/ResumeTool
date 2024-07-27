import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import { Input } from "../input";

export const PersonalDetailsCard = () => {
  const { data, setData } = useContext(DataContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      personnalDetails: {
        ...prevData.personnalDetails,
        [id]: value,
      },
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    try {
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save data to localStorage:", error);
    }
  };

  const handleClear = () => {
    setData((prevData) => ({
      ...prevData,
      personnalDetails: {
        fullname: "",
        email: "",
        address: "",
        phone: "",
      },
    }));
  };

  return (
    <>
      <Input
        labelName="Full Name"
        id="fullname"
        type="text"
        value={data.personnalDetails.fullname}
        onChange={handleChange}
        error={() => {}}
      />
      <Input
        labelName="Email"
        id="email"
        type="email"
        value={data.personnalDetails.email}
        onChange={handleChange}
        error={() => {}}
      />
      <Input
        labelName="Address"
        id="address"
        type="text"
        value={data.personnalDetails.address}
        onChange={handleChange}
        error={() => {}}
      />
      <Input
        labelName="Phone"
        id="phone"
        type="tel"
        value={data.personnalDetails.phone}
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
