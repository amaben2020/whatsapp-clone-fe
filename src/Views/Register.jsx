import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import { registerSchema } from "../schema/registerSchema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
          field="name"
          error={errors}
        />
        <Input
          register={register}
          placeholder="Enter your email"
          type="email"
          label="Email"
          field="email"
          error={errors}
        />{" "}
        <Input
          register={register}
          placeholder="Enter your password"
          type="password"
          label="Password"
          field="password"
          error={errors}
        />{" "}
        <Input
          register={register}
          placeholder="Enter your status"
          type="text"
          label="Status"
          field="status"
          error={errors}
        />
        {/* Picture component here */}
        <Input
          register={register}
          placeholder="Enter your picture (Optional)"
          type="file"
          label="Picture (Optional)"
          field="picture"
          error={errors}
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Register;
