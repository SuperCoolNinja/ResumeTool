import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";
import { InputsRegisterEducation } from "./inputs-register-education";
import { LoadEducations } from "./load-educations";

export const Educations = () => {
  const { data, setData } = useContext(DataContext);
  const [shouldAddNewEducation, setShouldAddNewEducation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
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

  const handleAddNewEducation = (bool) => {
    setShouldAddNewEducation(bool);
    setIsEditing(false);
    setTempData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleEdit = (education, index) => {
    setTempData(education);
    setCurrentIndex(index);
    setShouldAddNewEducation(true);
    setIsEditing(true);
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (tempData.school.trim() === "")
      newErrors.school = "School cannot be empty";
    if (tempData.degree.trim() === "")
      newErrors.degree = "Degree cannot be empty";
    if (tempData.startDate.trim() === "")
      newErrors.startDate = "Start date cannot be empty";
    if (tempData.endDate.trim() === "")
      newErrors.endDate = "End date cannot be empty";
    if (tempData.location.trim() === "")
      newErrors.location = "Location cannot be empty";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isEditing) {
      setData((prevData) => {
        const newEducations = [...prevData.educations];
        newEducations[currentIndex] = tempData;
        return { ...prevData, educations: newEducations };
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        educations: [...prevData.educations, { ...tempData, id: uuidv4() }],
      }));
    }

    setTempData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setShouldAddNewEducation(false);
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const handleDelete = (e, index) => {
    const filterDataToKeep = data.educations.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      educations: filterDataToKeep,
    }));
  };

  return (
    <>
      {shouldAddNewEducation ? (
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
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setAddNewEducation={handleAddNewEducation}
        />
      )}
    </>
  );
};
