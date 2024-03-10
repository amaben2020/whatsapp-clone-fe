import clsx from "clsx";
import React from "react";

const Input = ({
  register,
  placeholder,
  type,
  label,
  field,
  error,
  className,
  variant,
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className={clsx(
          error[field]?.message && "border-red-500 border-2",
          variant === "search" && "relative",
          "p-3 border rounded-lg accent-black",
          className,
        )}
        placeholder={placeholder}
        {...register(field, { required: true })}
      />

      {variant === "search" && (
        <span className="absolute z-20 text-black top-3 left-2">OK</span>
      )}
      {error[field]?.message.length && (
        <p className="my-2 text-red-500">{error[field].message}</p>
      )}
    </>
  );
};

export default Input;
