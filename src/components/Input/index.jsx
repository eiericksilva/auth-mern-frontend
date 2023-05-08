import { InputField, ContainerInput, Label } from "./styles";

const Input = ({ type, placeholder, id, children, onChange, name }) => {
  return (
    <ContainerInput>
      <Label htmlFor={id}>{children}</Label>
      <InputField
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        name={name}
      />
    </ContainerInput>
  );
};

export default Input;
