export const Details = ({ postTitle, positionTitle, description }) => {
  return (
    <div className="wrapper-resume-item wrapper-resume-sub-item">
      <h3>{postTitle}</h3>
      {positionTitle && <h4 className="positionTitle">{positionTitle}</h4>}
      <p className="description">{description}</p>
    </div>
  );
};
