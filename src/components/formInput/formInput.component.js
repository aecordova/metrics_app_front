import React from "react";

const FormInput = ({ type, prefix, placeholder, children }) => (
  <div className={`input-group ${prefix}-input`}>
    <label htmlFor={`${prefix}-input`}>{ children }</label>
    <input id={`${prefix}-input`} type={type} placeholder={placeholder}></input>
  </div>
);
export default FormInput;
