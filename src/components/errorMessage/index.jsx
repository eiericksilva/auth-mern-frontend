import React from "react";

const ErrorMessage = ({ children, className }) => {
  return (
    <span className={`text-xs text-e-danger -mt-5 ${className}`}>
      {children}
    </span>
  );
};

export default ErrorMessage;
