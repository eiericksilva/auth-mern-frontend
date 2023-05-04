import { InputField, ContainerInput, Label } from "./styles";

const Input = ({ type, placeholder, id, children }) => {
  return (
    <>
      <ContainerInput>
        <Label htmlFor={id}>{children}</Label>
        <InputField type={type} placeholder={placeholder} id={id} />
      </ContainerInput>
    </>
  );
};

export default Input;
