import React, { useState } from "react";
import "../css/inputs.css";

const Input = ({ onChange, type, lblName, name }) => {
  return (
    <>
      <input
        className="inputs"
        onChange={onChange}
        type={type}
        name={name}
        required
        autoComplete="off"
      />
      <label htmlFor={lblName} className="labels" required>
        {lblName}
      </label>
    </>
  );
};

export default Input;
