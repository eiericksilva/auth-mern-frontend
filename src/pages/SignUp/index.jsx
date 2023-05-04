import { Link } from "react-router-dom";
import Button from "../../components/button";
import WrapperForm from "../../components/wrapperForm";
import Form from "../../components/form";
import Input from "../../components/Input";

const SignUp = () => {
  return (
    <WrapperForm>
      <h1>Sign up</h1>
      <p>Join our community now!</p>
      <Form>
        <Input type="text" placeholder="Type your email" id="email">
          E-mail
        </Input>
        <Input type="password" placeholder="Type your password" id="password">
          Password
        </Input>
        <Input
          type="password"
          placeholder="Confirm your password"
          id="confirmPassword"
        >
          Confirm Password
        </Input>
        <Button type="submit" onClick={() => console.log("submitado")}>
          Sign Up
        </Button>
      </Form>
      <Link to="/">Go to Sign In</Link>
    </WrapperForm>
  );
};

export default SignUp;
