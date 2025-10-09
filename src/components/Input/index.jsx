import React from "react";
import "./InputField.scss";

const InputField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
