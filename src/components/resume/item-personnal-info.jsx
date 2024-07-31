export const ItemPersonnalInfo = ({ label, IconComponent }) => {
  return (
    <div className="wrapper-itemsIconPersonnal">
      <IconComponent />
      <p>{label}</p>
    </div>
  );
};
