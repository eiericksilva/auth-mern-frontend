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
`;
