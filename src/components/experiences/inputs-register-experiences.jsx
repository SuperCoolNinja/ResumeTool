import { Input } from "../shared/input";
import { Button } from "../shared/button";

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
        labelName="Company Name"
        id={`companyName-${uuid()}`}
        type="text"
        value={tempData.companyName}
        onChange={(e) => handleChange(e, "companyName")}
        error={errors.companyName}
      />
      <Input
        labelName="Position Title"
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
        <Button label={"Save"} handle={handleSaveData} style={"btn-save"} />

        {shouldAddNewExperience && (
          <Button
            label={"Cancel"}
            handle={() => setShouldAddNewExperience(false)}
            style={"btn-delete"}
          />
        )}
      </div>
    </>
  );
};
