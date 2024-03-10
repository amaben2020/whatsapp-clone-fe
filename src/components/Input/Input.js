import clsx from "clsx";
import React from "react";
import { ReturnIcon } from "../svg";

const Input = ({
  register,
  placeholder,
  type,
  label,
  field,
  error,
  className,
  hasSearchTerm,
  id,
}) => {
  const variant = placeholder.search("search") !== -1 ? "search" : "";
  console.log(variant);

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <span className={clsx(variant === "search" && "relative")}>
        <input
          id={id}
          type={type}
          className={clsx(
            error[field]?.message && "border-red-500 border-2",
            "p-3  border rounded-lg accent-black text-black",
            className,
          )}
          placeholder={placeholder}
          {...register(field, { required: true })}
        />

        {!hasSearchTerm && variant === "search" && (
          <span className="absolute z-20 text-black transform -translate-y-1/2 top-1/2 left-2">
            <ReturnIcon className="fill-green-900" />
            {/* <SendIcon /> */}
          </span>
        )}
      </span>

      {error[field]?.message.length && (
        <p className="my-2 text-red-500">{error[field].message}</p>
      )}
    </>
  );
};

export default Input;
