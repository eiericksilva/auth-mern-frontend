import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import PasswordField from "../../components/passwordField";
import Button from "../../components/button";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("data:", data);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <div className="flex flex-col bg-white min-w-[400px] h-[65vh] rounded-md p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full gap-5"
      >
        <h1 className="text-3xl">Sign In</h1>
        <p>Enter your access data in the field below</p>
        <Input
          {...register("email")}
          className="border border-[#a9a9a9] outline-none p-3"
          type="text"
          placeholder="Type your email"
          id="email"
        >
          Email
        </Input>

        <PasswordField
          {...register("password")}
          className="border border-[#a9a9a9] outline-none p-3"
          placeholder="Type your password"
        >
          Password
        </PasswordField>

        <Button>Sign In</Button>
        <Link to="/signup">Go to Sign Up</Link>
      </form>
    </div>
  );
};

export default SignIn;
