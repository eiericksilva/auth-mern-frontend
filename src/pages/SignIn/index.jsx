import Button from "../../components/button";
import PasswordField from "../../components/passwordField";
import { Link } from "react-router-dom";
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
});

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validateData = await validationSchema.validate(userData);
      console.log(validateData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Form>
      <h1>Sign In</h1>
      <p>Enter your access data in the field below</p>
      <Input
        type="text"
        placeholder="Type your email"
        id="email"
        name="email"
        onChange={handleInputChange}
      >
        E-mail
      </Input>

      <PasswordField name="password" onChange={handleInputChange} />
      <Button type="submit" onClick={handleSubmit}>
        Sign In
      </Button>
      <Link to="/signup">Go to Sign Up</Link>
    </Form>
  );
};

export default SignIn;
