import { Button } from "../shared/button";

export const LoadEducations = ({
  educations,
  handleEdit,
  handleDelete,
  setAddNewEducation,
}) => {
  return (
    <ul className="container-educations-loaded">
      {educations.map((education, index) => (
        <li className="wrapper-option" key={education.id}>
          <h3 className="title-education-loaded">{education.school}</h3>
          <div className="gap-1rem">
            <Button
              style={"option-edit"}
              handle={() => handleEdit(education, index)}
              label={"Edit"}
            />
            <Button
              style={"option-delete"}
              handle={(e) => handleDelete(e, index)}
              label={"Delete"}
            />
          </div>
        </li>
      ))}

      <Button
        style={"btn-save"}
        handle={() => setAddNewEducation(true)}
        label={"ADD"}
      />
    </ul>
  );
};
