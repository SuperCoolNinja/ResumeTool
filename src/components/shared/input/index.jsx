export const Input = ({ id, type, labelName, value, onChange, error }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
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

        {error?.length > 0 && <span className="error-message">{error}</span>}
      </div>
    </form>
  );
};
