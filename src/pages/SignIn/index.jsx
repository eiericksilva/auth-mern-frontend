import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input";
import PasswordField from "../../components/passwordField";
import Button from "../../components/button";
import ErrorMessage from "../../components/errorMessage";

import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const schemaSignIn = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(10),
  })
  .required();

const SignIn = () => {
  const { loginUser, errorApi } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });
  const onSubmit = (userData) => {
    loginUser(userData);
  };

  return (
    <div className="flex flex-col bg-white min-w-[400px] h-[65vh] rounded-md p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full gap-5"
      >
        <h1 className="text-3xl">Sign In</h1>
        <Input
          {...register("email")}
          type="text"
          placeholder="Type your email"
          id="email"
        >
          Email
        </Input>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <PasswordField
          {...register("password")}
          placeholder="Type your password"
        >
          Password
        </PasswordField>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <Button>Sign In</Button>
        <ErrorMessage className="text-center text-sm mt-1">
          {errorApi}
        </ErrorMessage>
        <Link to="/signup" className="text-e-terciary-text text-center">
          Go to Sign Up
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
