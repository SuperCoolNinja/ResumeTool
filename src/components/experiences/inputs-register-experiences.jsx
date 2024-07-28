import { Input } from "../input";

export const InputsRegisterExperiences = ({
  tempData,
  handleChange,
  handleSaveData,
  uuid,
  shouldAddNewExperience,
  setShouldAddNewExperience,
  errors,
}) => {
  return (
    <>
      <Input
        labelName="companyName"
        id={`companyName-${uuid()}`}
        type="text"
        value={tempData.companyName}
        onChange={(e) => handleChange(e, "companyName")}
        error={errors.companyName}
      />
      <Input
        labelName="positionTitle"
        id={`positionTitle-${uuid()}`}
        type="text"
        value={tempData.positionTitle}
        onChange={(e) => handleChange(e, "positionTitle")}
        error={errors.positionTitle}
      />
      <Input
        labelName="Start Date"
        id={`startDate-${uuid()}`}
        type="date"
        value={tempData.startDate}
        onChange={(e) => handleChange(e, "startDate")}
        error={errors.startDate}
      />
      <Input
        labelName="End Date"
        id={`endDate-${uuid()}`}
        type="date"
        value={tempData.endDate}
        onChange={(e) => handleChange(e, "endDate")}
        error={errors.endDate}
      />
      <Input
        labelName="Location"
        id={`location-${uuid()}`}
        type="text"
        value={tempData.location}
        onChange={(e) => handleChange(e, "location")}
        error={errors.location}
      />

      <Input
        labelName="Description"
        id={`Description-${uuid()}`}
        type="text"
        value={tempData.description}
        onChange={(e) => handleChange(e, "description")}
        error={errors.description}
      />

      <div className="wrapper-btn">
        <button className="btn-save" onClick={handleSaveData}>
          Save
        </button>

        {shouldAddNewExperience && (
          <button
            className="btn-delete"
            onClick={() => setShouldAddNewExperience(false)}
          >
            Cancel
          </button>
        )}
      </div>
    </>
  );
};
