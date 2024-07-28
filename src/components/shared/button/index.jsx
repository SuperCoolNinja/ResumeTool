export const Button = ({ label, handle, style }) => {
  return (
    <button className={style} onClick={handle}>
      {label}
    </button>
  );
};
