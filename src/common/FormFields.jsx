// FormInput Component
export const FormInput = ({
  type = "text",
  name,
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div className="checkout-form-list">
    <label>
      {placeholder} {required && <span className="required">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="form-control"
    />
  </div>
);

// FormTextArea Component
export const FormTextArea = ({
  name,
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div className="order-notes">
    <div className="checkout-form-list">
      <label>
        {placeholder} {required && <span className="required">*</span>}
      </label>
      <textarea
        name={name}
        id={`checkout-${name}`}
        value={value}
        onChange={onChange}
        required={required}
        cols="30"
        rows="10"
        placeholder={placeholder}
      ></textarea>
    </div>
  </div>
);

// FormSelect Component
export const FormSelect = ({
  name,
  options,
  placeholder,
  required,
  value,
  onChange,
}) => {
  const fieldName = placeholder.replace(" *", "");

  return (
    <div className="country-select">
      <label>
        {placeholder} {required && <span className="required">*</span>}
      </label>
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="" disabled hidden>{`Select ${fieldName}`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// RadioGroup Component
export const RadioGroup = ({ question, name, onChange, value }) => (
  <div className="checkout-form-list">
    <label>{question}</label>
    <div className="radio-list">
      <div
        className="radio-item"
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="radio"
          id={`${name}-yes`}
          name={name}
          value="yes"
          checked={value === "yes"}
          onChange={() => onChange("yes")}
          style={{ cursor: "pointer", marginRight: "5px" }}
        />
        <label htmlFor={`${name}-yes`}>Yes</label>
      </div>
      <div className="radio-item" style={{ display: "flex" }}>
        <input
          type="radio"
          id={`${name}-no`}
          name={name}
          value="no"
          checked={value === "no"}
          onChange={() => onChange("no")}
          style={{ cursor: "pointer", marginRight: "5px" }}
        />
        <label htmlFor={`${name}-no`}>No</label>
      </div>
    </div>
  </div>
);

// CheckboxInput Component
export const CheckboxInput = ({ label, name, checked, onChange, required }) => (
  <div className="checkout-form-list create-acc">
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
      required={required}
      style={{ cursor: "pointer" }}
    />
    <label htmlFor={name}>{label}</label>
  </div>
);
