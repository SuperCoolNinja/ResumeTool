import { Button } from "../shared/button";

export const LoadExperiences = ({
  experiences,
  handleEdit,
  handleDelete,
  setAddNewExperience,
}) => {
  return (
    <ul className="container-educations-loaded">
      {experiences?.map((experience, index) => (
        <li key={index}>
          <div className="wrapper-option">
            <h3 className="title-education-loaded">
              {experience?.companyName}
            </h3>
            <div className="gap-1rem">
              <Button
                label={"Edit"}
                handle={() => handleEdit(experience, index)}
                style={"option-edit"}
              />

              <Button
                label={"Delete"}
                handle={(e) => handleDelete(e, index)}
                style={"option-delete"}
              />
            </div>
          </div>
        </li>
      ))}

      <Button
        label={"ADD"}
        handle={() => setAddNewExperience(true)}
        style={"btn-save"}
      />
    </ul>
  );
};
