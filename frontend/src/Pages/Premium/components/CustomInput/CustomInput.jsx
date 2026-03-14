import customInput from "./CustomInput.module.css";

const CustomInput = (
  {
    placeholder,
    value,
    btnText,
    isValid,
    invalidText,
    handleChange,
    handleSubmit,
  },
) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`${customInput.wrapper}`}>
      <div className="d-flex">
        <input
          type="email"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={`${customInput.input}`}
        />
        <button
          onClick={handleSubmit}
          className={`${customInput.button} btn rounded-end-3`}
        >
          <span>
            <small>{btnText}</small>
            <small>{btnText}</small>
          </span>
        </button>
      </div>
      {!isValid && <p className="text-danger fs-6 ps-1 pt-1">{invalidText}</p>}
    </div>
  );
};

export default CustomInput;
