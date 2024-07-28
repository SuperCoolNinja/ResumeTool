export const LoadExperiences = ({
  experiences,
  handleEdit,
  handleDelete,
  setAddNewExperience,
}) => {
  return (
    <ul className="container-educations-loaded">
      {experiences.map((experience, index) => (
        <li key={experience.id}>
          <div className="wrapper-option">
            <h3 className="title-education-loaded">{experience.companyName}</h3>
            <div className="gap-1rem">
              <button
                className="option-edit"
                onClick={() => handleEdit(experience, index)}
              >
                Edit
              </button>
              <button
                onClick={(e) => handleDelete(e, index)}
                className="option-delete"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
      <button className="btn-save" onClick={() => setAddNewExperience(true)}>
        ADD
      </button>
    </ul>
  );
};
