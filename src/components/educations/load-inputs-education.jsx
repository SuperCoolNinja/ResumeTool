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
            error={() => {}}
          />
          <Input
            labelName="Degree"
            id={`degree-${education.id}`}
            type="text"
            value={education.degree}
            onChange={(e) => handleEditChange(e, index, "degree")}
            error={() => {}}
          />
          <Input
            labelName="Start Date"
            id={`startDate-${education.id}`}
            type="date"
            value={education.startDate}
            onChange={(e) => handleEditChange(e, index, "startDate")}
            error={() => {}}
          />
          <Input
            labelName="End Date"
            id={`endDate-${education.id}`}
            type="date"
            value={education.endDate}
            onChange={(e) => handleEditChange(e, index, "endDate")}
            error={() => {}}
          />
          <Input
            labelName="Location"
            id={`location-${education.id}`}
            type="text"
            value={education.location}
            onChange={(e) => handleEditChange(e, index, "location")}
            error={() => {}}
          />
        </div>
      ))}
    </>
  );
};
