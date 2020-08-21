import React from "react";

const FormInput = ({ handleOnChange, label, ...otherProps }) => (
  <div className="group">
    {label ? <label>{label}</label> : null}
    <input className="form-input" onChange={handleOnChange} {...otherProps} />
  </div>
);

export default FormInput;
