import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/button";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("data:", data);
  return (
    <div className="flex flex-col bg-white min-w-[400px] min-h-[65vh] rounded-md p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full gap-5"
      >
        <h1 className="text-3xl">Sign up</h1>
        <p>Join our community now!</p>
        <Input
          {...register("email")}
          className="flex flex-col border border-[#a9a9a9] outline-none p-3"
          type="text"
          placeholder="Type your email"
          id="email"
        >
          Email
        </Input>
        <Input
          {...register("password")}
          className="border border-[#a9a9a9] outline-none p-3"
          type="password"
          placeholder="Type your password"
          id="password"
        >
          Password
        </Input>
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
        <Button>Sign Up</Button>
        <Link to="/">Go to Sign In</Link>
      </form>
    </div>
  );
};

export default SignUp;
