import { useState, useEffect } from "react";
import { Card } from "../card";
import { PersonalDetailsCard } from "../personal-details-card";
import { DataContext } from "../../contexts/dataContext";
import { Educations } from "../educations";

export const App = () => {
  const [data, setData] = useState({
    personnalDetails: {
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      address: "30461 Lue Cliffs Suite 385",
      phone: "1-603-507-1027",
    },
    educations: [],
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

  useEffect(() => {
    const getData = localStorage.getItem("data");
    if (getData) {
      try {
        const dataParsed = JSON.parse(getData);
        setData(dataParsed);
      } catch (error) {
        console.error("Failed to parse data from localStorage:", error);
      }
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="container cards-space">
        <Card title="Personal Details">
          <PersonalDetailsCard />
        </Card>
        <Card title="Educations">
          <Educations />
        </Card>
      </div>
    </DataContext.Provider>
  );
};
