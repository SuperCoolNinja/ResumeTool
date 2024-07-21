import "./style.css";

export const Input = ({ id, type, labelName, value, onChange }) => {
  return (
    <form action="">
      <div>
        <label htmlFor={id}>{labelName}</label>
      </div>
      <div>
        <input
          onChange={onChange}
          className="input"
          type={type}
          id={id}
          value={value || ""}
        />
      </div>
    </form>
  );
};
