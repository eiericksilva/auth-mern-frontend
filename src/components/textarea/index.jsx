import React from "react";

const TextArea = ({ type, placeholder, id, children, onChange, name }, ref) => {
  return (
    <div className="flex flex-col relative my-4">
      <label
        className="flex flex-col text-xs mb-1 text-[#1b1f3b58] font-bold"
        htmlFor={id}
      >
        {children}
      </label>
      <textarea
        ref={ref}
        className="border border-[#a9a9a9] outline-none p-3 h-60"
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

const forwaredInput = React.forwardRef(TextArea);

export default forwaredInput;
