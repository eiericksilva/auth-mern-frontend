import { Container } from "./styles";

const InputField = ({ type, placeholder, id }) => {
  return <Container type={type} placeholder={placeholder} id={id} />;
};

export default InputField;
