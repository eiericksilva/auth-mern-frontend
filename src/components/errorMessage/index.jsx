import React from "react";

const ErrorMessage = ({ children }) => {
  return <span className="text-xs text-e-danger -mt-5">{children}</span>;
};

export default ErrorMessage;
