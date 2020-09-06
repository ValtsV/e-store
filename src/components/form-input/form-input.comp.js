import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleOnChange, label, ...otherProps }) => (
  <div className="form-input-group">
    {label ? <label>{label}</label> : null}
    <input className="form-input" onChange={handleOnChange} {...otherProps} />
  </div>
);

export default FormInput;
