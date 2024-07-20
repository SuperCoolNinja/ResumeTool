import React, { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import "./style.css";

export const Input = ({ id, type, labelName }) => {
  const { data, setData } = useContext(DataContext);

  const handleChange = (event) => {
    const { value } = event.target;

    setData((prevData) => ({
      ...prevData,
      personnalDetails: {
        ...prevData.personnalDetails,
        [id]: value,
      },
    }));
  };

  return (
    <form action="">
      <div>
        <label htmlFor={id}>{labelName}</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          className="input"
          type={type}
          id={id}
          value={data.personnalDetails[id]}
        />
      </div>
    </form>
  );
};
