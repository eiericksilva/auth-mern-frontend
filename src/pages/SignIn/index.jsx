import { Link } from "react-router-dom";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input";
import PasswordField from "../../components/passwordField";
import Button from "../../components/button";
import ErrorMessage from "../../components/errorMessage";

import api from "../../services/api";

const schemaSignIn = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(10),
  })
  .required();

const SignIn = () => {
  const [errorApi, setErrorApi] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });
  const onSubmit = (inputData) => {
    api
      .post("/user/login", inputData)
      .then((info) => {
        console.log(info.data.message);
        reset();
        setErrorApi(null);
      })
      .catch((error) => {
        setErrorApi(error.response.data);
      });
  };

  return (
    <div className="bg-[#ffffff] flex flex-col bg-white min-w-[400px] h-[65vh] rounded-md p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full gap-5"
      >
        <h1 className="text-3xl">Sign In</h1>
        <Input
          {...register("email")}
          className="border border-[#a9a9a9] outline-none p-3"
          type="text"
          placeholder="Type your email"
          id="email"
        >
          Email
        </Input>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <PasswordField
          {...register("password")}
          className="border border-[#a9a9a9] outline-none p-3"
          placeholder="Type your password"
        >
          Password
        </PasswordField>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <Button>Sign In</Button>
        <ErrorMessage className="text-center text-sm mt-1">
          {errorApi}
        </ErrorMessage>
        <Link to="/signup">Go to Sign Up</Link>
      </form>
    </div>
  );
};

export default SignIn;
