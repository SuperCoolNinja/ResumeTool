import { useContext } from "react";
import { Input } from "../input";
import { DataContext } from "../../contexts/dataContext";

const ExperienceInputs = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      {data.experiences.map((experience, index) => (
        <div key={index}>
          <Input
            labelName="Company Name"
            id={`companyName-${index}`}
            type="text"
            value={experience.companyName}
          />
          <Input
            labelName="Position Title"
            id={`positionTitle-${index}`}
            type="text"
            value={experience.positionTitle}
          />
          <Input
            labelName="Start Date"
            id={`startDate-${index}`}
            type="date"
            value={experience.startDate}
          />
          <Input
            labelName="End Date"
            id={`endDate-${index}`}
            type="date"
            value={experience.endDate}
          />
          <Input
            labelName="Location"
            id={`location-${index}`}
            type="text"
            value={experience.location}
          />
          <Input
            labelName="Description"
            id={`description-${index}`}
            type="text"
            value={experience.description}
          />
        </div>
      ))}
    </>
  );
};

export default ExperienceInputs;
