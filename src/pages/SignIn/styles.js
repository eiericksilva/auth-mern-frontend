import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    position: absolute;
    right: 15px;
    bottom: 10px;
  }

  label {
    font-size: 12px;
    margin-bottom: 7px;
    color: #596643;
    font-weight: 700;
  }
`;
