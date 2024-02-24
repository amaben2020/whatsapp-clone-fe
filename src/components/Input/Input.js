import React from "react";

const Input = ({ register, placeholder, type, label, field }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className="p-3 border rounded-lg accent-black"
        placeholder={placeholder}
        {...register(field, { required: true })}
      />
    </>
  );
};

export default Input;
