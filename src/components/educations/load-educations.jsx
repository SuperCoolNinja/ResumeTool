import { Button } from "../shared/button";
import { Actions } from "./actions";

export const LoadEducations = ({
  educations,
  handleEdit,
  handleDelete,
  setAddNewEducation,
}) => {
  return (
    <ul className="container-educations-loaded">
      {educations.map((education, index) => (
        <Actions
          key={education.id}
          education={education}
          index={index}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}

      <Button
        style={"btn-save"}
        handle={() => setAddNewEducation(true)}
        label={"ADD"}
      />
    </ul>
  );
};
