import Button from "../../components/button";
import PasswordField from "../../components/passwordField";
import { Link } from "react-router-dom";
import Form from "../../components/form";
import Input from "../../components/Input";
const SignIn = () => {
  return (
    <Form>
      <h1>Sign In</h1>
      <p>Enter your access data in the field below</p>
      <Input type="text" placeholder="Type your email" id="email">
        E-mail
      </Input>

      <PasswordField />
      <Button type="submit" onClick={() => console.log("submitado")}>
        Sign In
      </Button>
      <Link to="/signup">Go to Sign Up</Link>
    </Form>
  );
};

export default SignIn;
