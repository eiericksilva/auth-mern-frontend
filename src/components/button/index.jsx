import { Container } from "./styles";

const Button = ({ type, children, onClick }) => {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
