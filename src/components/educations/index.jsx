import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";
import { InputsRegisterEducation } from "./inputs-register-education";
import { LoadEducations } from "./load-educations";

export const Educations = () => {
  const { data, setData } = useContext(DataContext);
  const [shouldAddNewEducation, setShouldAddNewEducation] = useState(false);

  const canOpenTheInputsRegisterEducation =
    data.educations.length <= 0 || shouldAddNewEducation == true;

  const [tempData, setTempData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const { value } = e.target;

    setTempData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleAddNewEducation = (bool) => setShouldAddNewEducation(bool);

  const handleSaveData = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (tempData.school.trim() === "") {
      newErrors.school = "School cannot be empty";
    }
    if (tempData.degree.trim() === "") {
      newErrors.degree = "Degree cannot be empty";
    }
    if (tempData.startDate.trim() === "") {
      newErrors.startDate = "Start date cannot be empty";
    }
    if (tempData.endDate.trim() === "") {
      newErrors.endDate = "End date cannot be empty";
    }
    if (tempData.location.trim() === "") {
      newErrors.location = "Location cannot be empty";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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

    setShouldAddNewEducation(false);
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
      {canOpenTheInputsRegisterEducation ? (
        <InputsRegisterEducation
          tempData={tempData}
          handleChange={handleChange}
          handleSaveData={handleSaveData}
          uuid={uuidv4}
          shouldAddNewEducation={shouldAddNewEducation}
          setShouldAddNewEducation={handleAddNewEducation}
          errors={errors}
        />
      ) : (
        <LoadEducations
          educations={data.educations}
          handleEditChange={handleEditChange}
          setAddNewEducation={handleAddNewEducation}
        />
      )}
    </>
  );
};
