import { Container, WrapperForm } from "./styles";

const Form = ({ children }) => {
  return (
    <WrapperForm>
      <Container>{children}</Container>
    </WrapperForm>
  );
};

export default Form;
