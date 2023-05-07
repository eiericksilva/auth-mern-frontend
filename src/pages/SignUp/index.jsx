import { Link } from "react-router-dom";
import Button from "../../components/button";
import Form from "../../components/form";
import Input from "../../components/Input";

const SignUp = () => {
  return (
    <Form>
      <h1>Sign up</h1>
      <p>Join our community now!</p>
      <Input type="email" placeholder="Type your email" id="email">
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
      <Button type="submit">Sign Up</Button>
      <Link to="/">Go to Sign In</Link>
    </Form>
  );
};

export default SignUp;
