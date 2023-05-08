import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Input from "../Input";

const PasswordField = ({ name, onChange }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <Input
      id="password"
      name={name}
      type={passwordIsVisible ? "text" : "password"}
      placeholder="Type your password"
      onChange={onChange}
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
