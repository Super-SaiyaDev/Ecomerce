import React from "react";
import "./css/input.css";

const Input = ({ val ,onSumit, type, lblName }) => {
  return (
    <>
      <input
        onSubmit={onSumit}
        type={type}
        value={val}
        placeholder=""
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
