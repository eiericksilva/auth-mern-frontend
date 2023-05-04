import { Input, ContainerInput } from "./styles";

const InputField = ({ type, placeholder, id }) => {
  return (
    <ContainerInput>
      <Input type={type} placeholder={placeholder} id={id} />
    </ContainerInput>
  );
};

export default InputField;
