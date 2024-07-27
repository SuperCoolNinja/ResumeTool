import { Input } from "../input";

export const InputsRegisterEducation = ({
  tempData,
  handleChange,
  handleSaveData,
  uuid,
  shouldAddNewEducation,
  setShouldAddNewEducation,
  errors,
}) => {
  return (
    <>
      <Input
        labelName="School"
        id={`school-${uuid()}`}
        type="text"
        value={tempData.school}
        onChange={(e) => handleChange(e, "school")}
        error={errors.school}
      />
      <Input
        labelName="Degree"
        id={`degree-${uuid()}`}
        type="text"
        value={tempData.degree}
        onChange={(e) => handleChange(e, "degree")}
        error={errors.degree}
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

      <div className="wrapper-btn">
        <button className="btn-save" onClick={handleSaveData}>
          Save
        </button>

        {shouldAddNewEducation && (
          <button
            className="btn-delete"
            onClick={() => setShouldAddNewEducation(false)}
          >
            Cancel
          </button>
        )}
      </div>
    </>
  );
};
