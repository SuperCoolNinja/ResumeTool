import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";
import { InputsRegisterEducation } from "./inputs-register-education";
import { LoadEducations } from "./load-educations";
import { initialErrors, initialTempData } from "./data";
import { validateInputs } from "../../services/validateInputs";

export const Educations = () => {
  const { data, setData } = useContext(DataContext);
  const [shouldAddNewEducation, setShouldAddNewEducation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [tempData, setTempData] = useState(initialTempData);
  const [errors, setErrors] = useState(initialErrors);

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

  const handleDelete = (e, index) => {
    const filterDataToKeep = data.educations.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      educations: filterDataToKeep,
    }));
  };

  const resetTempData = () => {
    setTempData(initialTempData);
  };

  const resetForm = () => {
    resetTempData();
    setShouldAddNewEducation(false);
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const handleAddNewEducation = (bool) => {
    setShouldAddNewEducation(bool);
    setIsEditing(false);
    resetTempData();
  };

  const handleEdit = (education, index) => {
    setTempData(education);
    setCurrentIndex(index);
    setShouldAddNewEducation(true);
    setIsEditing(true);
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    const newErrors = validateInputs(tempData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isEditing) {
      setData((prevData) => {
        const updatedEducations = prevData.educations.map((education, index) =>
          index === currentIndex ? tempData : education
        );
        return { ...prevData, educations: updatedEducations };
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        educations: [...prevData.educations, { ...tempData, id: uuidv4() }],
      }));
    }

    resetForm();
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
