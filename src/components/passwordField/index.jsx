import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Input from "../Input";

const PasswordField = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <Input
      id="password"
      type={passwordIsVisible ? "text" : "password"}
      placeholder="Type your password"
    >
      Password
      {passwordIsVisible ? (
        <RxEyeOpen onClick={() => setPasswordIsVisible(false)} />
      ) : (
        <RxEyeClosed onClick={() => setPasswordIsVisible(true)} />
      )}
    </Input>
  );
};

export default PasswordField;
