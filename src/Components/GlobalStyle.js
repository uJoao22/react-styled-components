import { createGlobalStyle } from "styled-components";

// Redefinindo propriedas global do projeto com o Styled-Components
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`