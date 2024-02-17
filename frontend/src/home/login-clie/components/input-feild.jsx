import React, { useState } from "react";
import "./css/input.css";

const Input = ({ onChange, type, lblName, name }) => {


  return (
    <>
      <input
        onChange={onChange}
        type={type}
        name={name}
        required
        autoComplete="off"
      />
      <label htmlFor={lblName} required>
        {lblName}
      </label>
    </>
  );
};

export default Input;
