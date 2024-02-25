import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";
import { loginUser } from "../redux/features/user/userSlice";
import { loginSchema } from "../schema/authSchema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(loginUser({ ...data }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl p-3 mx-auto border ">
      <h2 className="text-center"> Login </h2>
      {user.status === "pending" && <p>LOADING...</p>}
      <form
        className="flex flex-col justify-center space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <button
          type="submit"
          disabled={errors.name || errors.email || errors.password}
          className="p-3 mt-3 font-bold bg-white border rounded-lg disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed hover:bg-gray-600 hover:text-white"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

// ben10@gmail.com
// Amaben@1
//Benzuggy007
