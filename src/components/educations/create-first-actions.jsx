import { Button } from "../shared/button";

export const CreateFirstActions = ({
  shouldAddNewEducation,
  setShouldAddNewEducation,
  handle,
}) => {
  return (
    <div className="wrapper-btn">
      <Button label={"Save"} handle={handle} style={"btn-save"} />

      {shouldAddNewEducation && (
        <Button
          label={"Cancel"}
          handle={() => setShouldAddNewEducation(false)}
          style={"btn-delete"}
        />
      )}
    </div>
  );
};
