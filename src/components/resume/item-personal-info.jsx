export const ItemPersonalInfo = ({ label, IconComponent }) => {
  return (
    <div className="wrapper-itemsIconPersonnal">
      <IconComponent />
      <p>{label}</p>
    </div>
  );
};
