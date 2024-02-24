import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input/Input";
import Picture from "../components/Input/Picture";
import { registerUser } from "../redux/features/user/userSlice";
import { registerSchema } from "../schema/registerSchema";
const Register = () => {
  // the exact picture file to be sent to cloudinary
  const [picture, setPicture] = useState();
  //   PICTURE TO BE DISPLAYED
  const [readablePicture, setReadablePicture] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerUser({ ...data, picture }));
  };

  // Amaben@1

  console.log("USER", user);

  console.log("picture file", picture);

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
        <Picture
          setPicture={setPicture}
          setReadablePicture={setReadablePicture}
          readablePicture={readablePicture}
        />
        <button
          type="submit"
          disabled={errors.name || errors.email || errors.password}
          className="p-3 border rounded-lg disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
