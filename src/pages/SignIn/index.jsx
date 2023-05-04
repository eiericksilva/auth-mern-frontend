import InputField from "../../components/Input";
import Button from "../../components/button";
import PasswordField from "../../components/passwordField";
import { Link } from "react-router-dom";
import WrapperForm from "../../components/wrapperForm";
import Form from "../../components/form";
import { ContainerInput } from "./styles";
const SignIn = () => {
  return (
    <WrapperForm>
      <h1>Sign In</h1>
      <p>Enter your access data in the field below</p>
      <Form>
        <ContainerInput>
          <label htmlFor="email">E-mail</label>
          <InputField type="text" placeholder="Type your email" id="email" />
        </ContainerInput>
        <PasswordField />
        <Button type="submit" onClick={() => console.log("submitado")}>
          Sign In
        </Button>
        <Link to="/signup">Go to Sign Up</Link>
      </Form>
    </WrapperForm>
  );
};

export default SignIn;
