function Input({ placeholder, name, value, onChange, error }) {
  return (
    <div
      style={error ? { color: "hsl(0, 100%, 67%)" } : null}
      className="input-stn"
    >
      <label htmlFor={name}>{name}</label>
      <input
        className={`no-arrows ${error ? "input-error" : ""}`}
        type="number"
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div style={{ minHeight: "2rem" }}>{error}</div>
    </div>
  );
}

export default Input;
