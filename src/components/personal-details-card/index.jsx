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

    const { id, value } = e.target;
    const getData = localStorage.getItem("data");

    if (getData) {
      try {
        const dataParsed = JSON.parse(getData);
        setData((prevData) => ({
          ...prevData,
          dataParsed,
        }));

        localStorage.setItem(
          "data",
          JSON.stringify({
            personnalDetails: {
              ...data.personnalDetails,
              [id]: value,
            },
          })
        );
      } catch (error) {
        console.error("Failed to parse data from localStorage:", error);
      }
    } else {
      localStorage.setItem(
        "data",
        JSON.stringify({
          personnalDetails: {
            ...data.personnalDetails,
            [id]: value,
          },
        })
      );
    }
  };

  const handleClear = () => {
    setData({
      personnalDetails: {
        fullname: "",
        email: "",
        address: "",
        phone: "",
      },
    });
  };

  return (
    <>
      <Input
        labelName="Full Name"
        id="fullname"
        type="text"
        value={data.personnalDetails.fullname}
        onChange={handleChange}
      />
      <Input
        labelName="Email"
        id="email"
        type="email"
        value={data.personnalDetails.email}
        onChange={handleChange}
      />
      <Input
        labelName="Address"
        id="address"
        type="text"
        value={data.personnalDetails.address}
        onChange={handleChange}
      />
      <Input
        labelName="Phone"
        id="phone"
        type="tel"
        value={data.personnalDetails.phone}
        onChange={handleChange}
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
