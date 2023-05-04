import { ContainerInput, Form, Wrapper } from "./styles";
import InputField from "../../components/Input";
import Button from "../../components/button";
import PasswordField from "../../components/passwordField";
const SignIn = () => {
  return (
    <Wrapper>
      <h1>Login</h1>
      <p>Enter your access data in the field below</p>
      <Form>
        <ContainerInput>
          <label htmlFor="email">E-mail</label>
          <InputField type="text" placeholder="Type your email" id="email" />
        </ContainerInput>
        <PasswordField />
        <p className="forgotPassaword">
          <a href="#">I forgot my password</a>
        </p>
        <Button type="submit" onClick={() => console.log("submitado")}>
          Sign In
        </Button>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
