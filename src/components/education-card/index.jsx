import { useContext } from "react";
import { Input } from "../input";
import { DataContext } from "../../contexts/dataContext";

export const EducationInputs = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      {data.educations.map((education, index) => (
        <div key={index}>
          <Input
            labelName="School"
            id={`school-${index}`}
            type="text"
            value={education.school}
          />
          <Input
            labelName="Degree"
            id={`degree-${index}`}
            type="text"
            value={education.degree}
          />
          <Input
            labelName="Start Date"
            id={`startDate-${index}`}
            type="date"
            value={education.startDate}
          />
          <Input
            labelName="End Date"
            id={`endDate-${index}`}
            type="date"
            value={education.endDate}
          />
          <Input
            labelName="Location"
            id={`location-${index}`}
            type="text"
            value={education.location}
          />
        </div>
      ))}
    </>
  );
};
