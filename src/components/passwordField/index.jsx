import { useState } from "react";
import { ContainerInput } from "./styles";
import InputField from "../Input";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const PasswordField = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <ContainerInput>
      <label htmlFor="password">Password</label>
      <InputField
        type={passwordIsVisible ? "text" : "password"}
        placeholder="Type your password"
        id="password"
      />
      {passwordIsVisible ? (
        <RxEyeOpen onClick={() => setPasswordIsVisible(false)} />
      ) : (
        <RxEyeClosed onClick={() => setPasswordIsVisible(true)} />
      )}
    </ContainerInput>
  );
};

export default PasswordField;
