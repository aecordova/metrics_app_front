import React from "react";

const FormInput = ({ type, prefix, placeholder, children }) => (
  <div className={`input-group ${prefix}-input`}>
    <label for={`${prefix}-input`}>{ children }</label>
    <input id={`${prefix}-input`} type={type} placeHolder={placeholder}></input>
  </div>
);
export default FormInput;
