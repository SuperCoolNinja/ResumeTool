import { useContext, useState } from "react";
import { Input } from "../input";
import { DataContext } from "../../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";

export const Educations = () => {
  const { data, setData } = useContext(DataContext);

  const [tempData, setTempData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleChange = (e, field) => {
    const { value } = e.target;

    setTempData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveData = (e) => {
    e.preventDefault();

    setData((prevData) => ({
      ...prevData,
      educations: [...prevData.educations, { ...tempData, id: uuidv4() }],
    }));

    setTempData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleEditChange = (e, index, field) => {
    const { value } = e.target;

    setData((prevData) => {
      const newEducations = [...prevData.educations];
      newEducations[index] = { ...newEducations[index], [field]: value };
      return { ...prevData, educations: newEducations };
    });
  };

  return (
    <>
      {data.educations.length <= 0 ? (
        <InputsRegisterEducation
          tempData={tempData}
          handleChange={handleChange}
          handleSaveData={handleSaveData}
        />
      ) : (
        <LoadInputsEducation
          educations={data.educations}
          handleEditChange={handleEditChange}
        />
      )}
    </>
  );
};

const LoadInputsEducation = ({ educations, handleEditChange }) => {
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

const InputsRegisterEducation = ({
  tempData,
  handleChange,
  handleSaveData,
}) => {
  return (
    <>
      <Input
        labelName="School"
        id={`school-${uuidv4()}`}
        type="text"
        value={tempData.school}
        onChange={(e) => handleChange(e, "school")}
      />
      <Input
        labelName="Degree"
        id={`degree-${uuidv4()}`}
        type="text"
        value={tempData.degree}
        onChange={(e) => handleChange(e, "degree")}
      />
      <Input
        labelName="Start Date"
        id={`startDate-${uuidv4()}`}
        type="date"
        value={tempData.startDate}
        onChange={(e) => handleChange(e, "startDate")}
      />
      <Input
        labelName="End Date"
        id={`endDate-${uuidv4()}`}
        type="date"
        value={tempData.endDate}
        onChange={(e) => handleChange(e, "endDate")}
      />
      <Input
        labelName="Location"
        id={`location-${uuidv4()}`}
        type="text"
        value={tempData.location}
        onChange={(e) => handleChange(e, "location")}
      />

      <div className="wrapper-btn">
        <button className="btn-clear" onClick={handleSaveData}>
          Clear
        </button>
        <button className="btn-save" onClick={handleSaveData}>
          Save
        </button>
      </div>
    </>
  );
};
