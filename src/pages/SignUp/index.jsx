import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input";
import Button from "../../components/button";

const schemaSignUp = yup
  .object({
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });
  const onSubmit = (data) => console.log("data:", data);
  return (
    <div className="bg-[#ffffff] flex flex-col bg-white min-w-[400px] min-h-[65vh] rounded-md p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full gap-5"
      >
        <h1 className="text-[#000315] text-3xl">Sign up</h1>
        <Input
          {...register("email")}
          className="flex flex-col border border-[#a9a9a9] outline-none p-3"
          type="text"
          placeholder="Type your email"
          id="email"
        >
          Email
        </Input>
        <p className="text-xs text-e-danger -mt-5">{errors.email?.message}</p>
        <Input
          {...register("password")}
          className="border border-[#a9a9a9] outline-none p-3"
          type="password"
          placeholder="Type your password"
          id="password"
        >
          Password
        </Input>
        <p className="text-xs text-e-danger -mt-5">
          {errors.password?.message}
        </p>
        <Input
          {...register("confirmPassword")}
          className="w-full flex flex-col border border-[#a9a9a9] outline-none p-3"
          type="password"
          placeholder="Confirm your password"
          id="confirmPassword"
          name="confirmPassword"
        >
          Confirm your password
        </Input>
        <p className="text-xs text-e-danger -mt-5">
          {errors.confirmPassword?.message}
        </p>
        <Button>Sign Up</Button>
        <Link to="/">Go to Sign In</Link>
      </form>
    </div>
  );
};

export default SignUp;
