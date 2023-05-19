import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col bg-white min-w-[400px] h-[65vh] rounded-md p-8">
      <form className="flex flex-col h-full gap-5">
        <h1 className="text-3xl">Sign up</h1>
        <p>Join our community now!</p>
        <label
          className="flex flex-col text-xs mb-2 text-[#596643] font-bold"
          htmlFor="email"
        >
          Email
          <input
            className="flex flex-col border border-[#a9a9a9] outline-none p-3"
            type="text"
            placeholder="Type your email"
            id="email"
          />
        </label>
        <label
          className="flex flex-col text-xs mb-2 text-[#596643] font-bold"
          htmlFor="password"
        >
          Password
          <input
            className="border border-[#a9a9a9] outline-none p-3"
            type="password"
            placeholder="Type your password"
            id="password"
          />
        </label>
        <label
          className="text-xs mb-2 text-[#596643] font-bold"
          htmlFor="confirmPassword"
        >
          Confirm your password
          <input
            className="w-full flex flex-col border border-[#a9a9a9] outline-none p-3"
            type="password"
            placeholder="Confirm your password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </label>
        <button
          className="text-white p-3 font-bold bg-[#596643] border-0 rounded-md hover:cursor-pointer hover:bg-[#475236]"
          type="submit"
        >
          Sign Up
        </button>
        <Link to="/">Go to Sign In</Link>
      </form>
    </div>
  );
};

export default SignUp;
