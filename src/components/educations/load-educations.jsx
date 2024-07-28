export const LoadEducations = ({
  educations,
  handleEditChange,
  handleDelete,
  setAddNewEducation,
}) => {
  return (
    <ul className="container-educations-loaded">
      {educations.map((education, index) => (
        <li key={index}>
          <div className="wrapper-option">
            <h3 className="title-education-loaded">{education.school}</h3>
            <div className="gap-1rem">
              <button className="option-edit">Edit</button>
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
      <button className="btn-save" onClick={() => setAddNewEducation(true)}>
        ADD
      </button>
    </ul>
  );
};
