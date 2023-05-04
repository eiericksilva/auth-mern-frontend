import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  min-width: 400px;
  height: 59vh;
  border-radius: 5px;

  padding: 30px;

  p {
    color: #a9a9a9;
    margin: 20px 0;
  }

  a {
    color: #596643;
    font-weight: 700;
    font-size: 12px;

    &:hover {
      color: #475236;
    }
  }
`;
