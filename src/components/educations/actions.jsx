import { Button } from "../shared/button";

export const Actions = ({ education, index, handleEdit, handleDelete }) => {
  return (
    <li className="wrapper-option">
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
  );
};
