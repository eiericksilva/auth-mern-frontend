import { Link } from "react-router-dom";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const SignIn = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <div className="flex flex-col bg-white min-w-[400px] h-[65vh] rounded-md p-8">
      <form className="flex flex-col h-full gap-5">
        <h1>Sign In</h1>
        <p>Enter your access data in the field below</p>
        <label
          className="flex flex-col text-xs mb-2 text-[#596643] font-bold"
          htmlFor="email"
        >
          Email
          <input
            className="border border-[#a9a9a9] outline-none p-3"
            type="text"
            placeholder="Type your email"
            id="email"
          />
        </label>
        <label
          className="relative flex flex-col text-xs mb-2 text-[#596643] font-bold"
          htmlFor="password"
        >
          Password
          <input
            className="border border-[#a9a9a9] outline-none p-3"
            type={passwordIsVisible ? "text" : "password"}
            placeholder="Type your password"
          />
          <span className="absolute right-3 bottom-4">
            {passwordIsVisible ? (
              <RxEyeOpen onClick={() => setPasswordIsVisible(false)} />
            ) : (
              <RxEyeClosed onClick={() => setPasswordIsVisible(true)} />
            )}
          </span>
        </label>
        <button
          className="text-white p-3 font-bold bg-[#596643] border-0 rounded-md hover:cursor-pointer hover:bg-[#475236]"
          type="submit"
        >
          Sign In
        </button>
        <Link to="/signup">Go to Sign Up</Link>
      </form>
    </div>
  );
};

export default SignIn;
