import React, { useState } from "react";
import "./css/input.css";
import "./css/inputs.css";

const UserInput = ({ onChange, type, lblName, name }) => {
  return (
    <>
      <input
        className="input"
        onChange={onChange}
        type={type}
        name={name}
        required
        autoComplete="off"
      />

      <label className="label" htmlFor={lblName} required>
        {lblName}
      </label>
    </>
  );
};

export default UserInput;
