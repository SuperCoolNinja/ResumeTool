import { useContext } from "react";
import { Input } from "../input";
import { DataContext } from "../../contexts/dataContext";

export const Educations = () => {
  const { data, setData } = useContext(DataContext);

  const handleChange = (e, index, field) => {
    const { value } = e.target;

    e.preventDefault();

    setData((prevData) => ({
      ...prevData,
      educations: prevData.educations.map((education, i) =>
        i === index ? { ...education, [field]: value } : education
      ),
    }));
  };

  return (
    <div>
      {data.educations.map((education, index) => (
        <div key={index}>
          <Input
            labelName="School"
            id={`school-${index}`}
            type="text"
            value={education.school}
            onChange={(e) => handleChange(e, index, "school")}
          />
          <Input
            labelName="Degree"
            id={`degree-${index}`}
            type="text"
            value={education.degree}
            onChange={(e) => handleChange(e, index, "degree")}
          />
          <Input
            labelName="Start Date"
            id={`startDate-${index}`}
            type="date"
            value={education.startDate}
            onChange={(e) => handleChange(e, index, "startDate")}
          />
          <Input
            labelName="End Date"
            id={`endDate-${index}`}
            type="date"
            value={education.endDate}
            onChange={(e) => handleChange(e, index, "endDate")}
          />
          <Input
            labelName="Location"
            id={`location-${index}`}
            type="text"
            value={education.location}
            onChange={(e) => handleChange(e, index, "location")}
          />
        </div>
      ))}
    </div>
  );
};
