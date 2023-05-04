import { Link } from "react-router-dom";
import InputField from "../../components/Input";
import Button from "../../components/button";
import WrapperForm from "../../components/wrapperForm";
import Form from "../../components/form";
import { ContainerInput } from "../../components/Input/styles";

const SignUp = () => {
  return (
    <WrapperForm>
      <h1>Sign up</h1>
      <p>Join our community now!</p>
      <Form>
        <ContainerInput>
          <label htmlFor="email">E-mail</label>
          <InputField type="email" placeholder="Type your Email" id="email">
            <InputField type="text" placeholder="Type your email" id="email" />
          </InputField>
        </ContainerInput>
        <ContainerInput>
          <label htmlFor="password">Password</label>
          <InputField
            type="password"
            placeholder="Type your password"
            id="password"
          />
        </ContainerInput>

        <ContainerInput>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputField
            type="password"
            placeholder="Type your password again"
            id="confirmPassword"
          />
        </ContainerInput>
        <Button type="submit" onClick={() => console.log("submitado")}>
          Sign Up
        </Button>
        <Link to="/">Go to Sign In</Link>
      </Form>
    </WrapperForm>
  );
};

export default SignUp;
