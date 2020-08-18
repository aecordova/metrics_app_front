import React from "react";
import "./form.styles.scss";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../custom-button/custom-button.component";
const Form = ({onSubmit}) => (
  <form onSubmit = {onSubmit} >
    <FormInput
      type="text"
      prefix="metric-name"
      placeholder="Metric Name"
    >Metric Name: </FormInput>
    <FormInput
      type="number"
      prefix="metric-value"
      placeholder="Value"
      >Value: </FormInput>
    <CustomButton type='submit'>Send</CustomButton>
  </form>
);

export default Form;
