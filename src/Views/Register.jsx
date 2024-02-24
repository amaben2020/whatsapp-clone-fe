import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("errors", errors);
  return (
    <div className="max-w-xl p-3 mx-auto border ">
      <h2 className="text-center"> Register </h2>

      <form
        className="flex flex-col justify-center space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register}
          placeholder="Enter your name"
          type="text"
          label="Full Name"
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Register;
