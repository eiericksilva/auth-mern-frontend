import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ErrorMessage from "../../components/errorMessage";

import Input from "../../components/Input";
import Button from "../../components/button";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const schemaSignUp = yup
  .object({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(10),
    confirmPassword: yup
      .string("email deve ser do tipo email")
      .oneOf(
        [yup.ref("password")],
        "password and password confirmation do not match"
      )
      .required(),
  })
  .required();

const SignUp = () => {
  const { registerUser, apiError } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });
  const onSubmit = async (userData) => {
    registerUser(userData);
  };
  return (
    <div className="flex flex-col bg-white min-w-[400px] min-h-[65vh] rounded-md p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full gap-5"
      >
        <h1 className="text-[#000315] text-3xl">Sign up</h1>
        <Input
          {...register("username")}
          type="text"
          placeholder="Type your username"
          id="username"
        >
          Username
        </Input>
        <Input
          {...register("email")}
          type="text"
          placeholder="Type your email"
          id="email"
        >
          Email
        </Input>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Input
          {...register("password")}
          type="password"
          placeholder="Type your password"
          id="password"
        >
          Password
        </Input>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm your password"
          id="confirmPassword"
          name="confirmPassword"
        >
          Confirm your password
        </Input>
        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        <Button>Sign Up</Button>
        <ErrorMessage className="text-center text-sm mt-1">
          {apiError}
        </ErrorMessage>
        <Link to="/" className="text-e-terciary-text text-center">
          Go to Sign In
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
