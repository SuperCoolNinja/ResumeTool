import { Input } from "../input";

export const LoadInputsEducation = ({ educations, handleEditChange }) => {
  return (
    <>
      {educations.map((education, index) => (
        <div key={index}>
          <Input
            labelName="School"
            id={`school-${education.id}`}
            type="text"
            value={education.school}
            onChange={(e) => handleEditChange(e, index, "school")}
          />
          <Input
            labelName="Degree"
            id={`degree-${education.id}`}
            type="text"
            value={education.degree}
            onChange={(e) => handleEditChange(e, index, "degree")}
          />
          <Input
            labelName="Start Date"
            id={`startDate-${education.id}`}
            type="date"
            value={education.startDate}
            onChange={(e) => handleEditChange(e, index, "startDate")}
          />
          <Input
            labelName="End Date"
            id={`endDate-${education.id}`}
            type="date"
            value={education.endDate}
            onChange={(e) => handleEditChange(e, index, "endDate")}
          />
          <Input
            labelName="Location"
            id={`location-${education.id}`}
            type="text"
            value={education.location}
            onChange={(e) => handleEditChange(e, index, "location")}
          />
        </div>
      ))}
    </>
  );
};
