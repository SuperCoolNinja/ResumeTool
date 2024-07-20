import { useState } from "react";
import { Card } from "../card";
import { PersonalDetailsInputs } from "../personal-details-card";
import { EducationInputs } from "../education-card";
import ExperienceInputs from "../experience-card";
import { DataContext } from "../../contexts/dataContext";

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

  const [viewMoreStates, setViewMoreStates] = useState([true, false, false]);

  const handleViewMoreChange = (index, bool) => {
    setViewMoreStates((prev) =>
      prev.map((viewMore, idx) => (idx === index ? bool : viewMore))
    );
  };

  return (
    <DataContext.Provider value={dataObj}>
      <div className="container cards-space">
        <Card
          title="Personal Details"
          renderInputs={PersonalDetailsInputs}
          viewMore={viewMoreStates[0]}
          setViewMore={(bool) => handleViewMoreChange(0, bool)}
        />
        <Card
          title="Education"
          renderInputs={EducationInputs}
          viewMore={viewMoreStates[1]}
          setViewMore={(bool) => handleViewMoreChange(1, bool)}
        />
        <Card
          title="Experience"
          renderInputs={ExperienceInputs}
          viewMore={viewMoreStates[2]}
          setViewMore={(bool) => handleViewMoreChange(2, bool)}
        />
      </div>
    </DataContext.Provider>
  );
};
