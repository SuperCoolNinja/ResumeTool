import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";
import { InputsRegisterExperiences } from "./inputs-register-experiences";
import { LoadExperiences } from "./load-experiences";
import { initialTempData } from "./data";
import { dataCannotBeEmpty } from "../../services/validateInputs";

export const Experiences = () => {
  const { data, setData } = useContext(DataContext);
  const [shouldAddNewExperience, setShouldAddNewExperience] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [tempData, setTempData] = useState(initialTempData);

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

  const handleAddNewExperience = (bool) => {
    setShouldAddNewExperience(bool);
    setIsEditing(false);
    setTempData(initialTempData);
  };

  const handleEdit = (experience, index) => {
    setTempData(experience);
    setCurrentIndex(index);
    setShouldAddNewExperience(true);
    setIsEditing(true);
  };

  const handleSaveData = (e) => {
    e.preventDefault();

    const newErrors = dataCannotBeEmpty(tempData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isEditing) {
      setData((prevData) => {
        const newExperience = [...prevData.educations];
        newExperience[currentIndex] = tempData;
        return { ...prevData, experiences: newExperience };
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        experiences: [...prevData.experiences, { ...tempData, id: uuidv4() }],
      }));
    }

    setTempData(initialTempData);
    setShouldAddNewExperience(false);
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const handleDelete = (e, index) => {
    const filterDataToKeep = data.experiences.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      experiences: filterDataToKeep,
    }));
  };

  return (
    <>
      {shouldAddNewExperience ? (
        <InputsRegisterExperiences
          tempData={tempData}
          handleChange={handleChange}
          handleSaveData={handleSaveData}
          uuid={uuidv4}
          shouldAddNewEducation={shouldAddNewExperience}
          setShouldAddNewEducation={handleAddNewExperience}
          errors={errors}
        />
      ) : (
        <LoadExperiences
          experiences={data.experiences}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setAddNewExperience={handleAddNewExperience}
        />
      )}
    </>
  );
};
