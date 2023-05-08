import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 100vh;

        background-color: #78866b;
    }

    a {
        color: #596643;
        font-weight: 700;
        font-size: 12px;

        &:hover {
        color: #475236;
        }
    }

    p.error {
        color: red;
    }
`;
