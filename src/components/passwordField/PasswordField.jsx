import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

const PasswordField = () => {
  const { register } = useForm();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <>
      <Input
        type={passwordIsVisible ? "text" : "password"}
        placeholder="Type your password"
        id="password"
        {...register("password")}
      >
        Password
      </Input>
      <span>
        {passwordIsVisible ? (
          <RxEyeOpen onClick={() => setPasswordIsVisible(false)} />
        ) : (
          <RxEyeClosed onClick={() => setPasswordIsVisible(true)} />
        )}
      </span>
    </>
  );
};

export default PasswordField;
