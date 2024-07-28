import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";
import { InputsRegisterExperiences } from "./inputs-register-experiences";
import { LoadExperiences } from "./load-experiences";

export const Experiences = () => {
  const { data, setData } = useContext(DataContext);

  const [shouldAddNewExperience, setShouldAddNewExperience] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [tempData, setTempData] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
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

  const handleAddNewExperience = (bool) => {
    setShouldAddNewExperience(bool);
    setIsEditing(false);
    setTempData({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const handleEdit = (experience, index) => {
    setTempData(experience);
    setCurrentIndex(index);
    setShouldAddNewExperience(true);
    setIsEditing(true);
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (tempData.companyName.trim() === "")
      newErrors.companyName = "Company cannot be empty";
    if (tempData.positionTitle.trim() === "")
      newErrors.positionTitle = "Position cannot be empty";
    if (tempData.startDate.trim() === "")
      newErrors.startDate = "Start date cannot be empty";
    if (tempData.endDate.trim() === "")
      newErrors.endDate = "End date cannot be empty";
    if (tempData.location.trim() === "")
      newErrors.location = "Location cannot be empty";
    if (tempData.description.trim() === "")
      newErrors.description = "Description cannot be empty";
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

    setTempData({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
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
