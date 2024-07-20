import { useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { PersonalDetailsCard } from "../personal-details-card";
import "./style.css";

export const App = () => {
  const [data, setData] = useState({
    personnalDetails: {
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      address: "30461 Lue Cliffs Suite 385",
      phone: "1-603-507-1027",
    },
    educations: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
    experiences: [
      {
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
  });

  const dataObj = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={dataObj}>
      <div className="container">
        <PersonalDetailsCard />
      </div>
    </DataContext.Provider>
  );
};
