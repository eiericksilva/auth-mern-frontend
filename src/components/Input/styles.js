import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    position: absolute;
    right: 5%;
    top: 60%;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 7px;
  color: #596643;
  font-weight: 700;
`;

export const InputField = styled.input`
  border: 1px solid #a9a9a9;
  outline: none;
  padding: 10px;
`;
