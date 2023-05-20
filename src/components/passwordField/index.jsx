import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const PasswordField = (
  { type, placeholder, id, children, onChange, name },
  ref
) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <div className="flex flex-col relative">
      <label
        className="flex flex-col text-xs mb-2 text-[#596643] font-bold"
        htmlFor={id}
      >
        {children}
      </label>
      <input
        ref={ref}
        className="border border-[#a9a9a9] outline-none p-3"
        type={`${passwordIsVisible ? "text" : "password"}`}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        name={name}
      />
      <span className="absolute right-3 bottom-4">
        {passwordIsVisible ? (
          <RxEyeOpen onClick={() => setPasswordIsVisible(false)} />
        ) : (
          <RxEyeClosed onClick={() => setPasswordIsVisible(true)} />
        )}
      </span>
    </div>
  );
};

const forwaredInput = React.forwardRef(PasswordField);

export default forwaredInput;
