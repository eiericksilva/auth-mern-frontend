import { Link } from "react-router-dom";
import Button from "../../components/button";
import Form from "../../components/form";
import Input from "../../components/Input";
import { useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("email deve ser do tipo email")
    .required("email é um campo obrigatório"),
  password: yup
    .string("email deve ser do tipo email")
    .min(10, "Password deve ter ao menos 10 caracteres")
    .required("password é um campo obrigatório"),
  confirmPassword: yup
    .string("email deve ser do tipo email")
    .oneOf([yup.ref("password")], "senha e confirmação de senha não coincidem")
    .required("password é um campo obrigatório"),
});

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      const validateData = await validationSchema.validate(userData);
      console.log(validateData);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <Form>
      <h1>Sign up</h1>
      <p>Join our community now!</p>
      <Input
        type="text"
        placeholder="Type your email"
        id="email"
        name="email"
        onChange={handleInputChange}
      >
        E-mail
      </Input>
      <Input
        type="password"
        placeholder="Type your password"
        id="password"
        name="password"
        onChange={handleInputChange}
      >
        Password
      </Input>
      <Input
        type="password"
        placeholder="Confirm your password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={handleInputChange}
      >
        Confirm Password
      </Input>
      <Button type="submit" onClick={handleSubmit}>
        Sign Up
      </Button>
      <Link to="/">Go to Sign In</Link>
    </Form>
  );
};

export default SignUp;
