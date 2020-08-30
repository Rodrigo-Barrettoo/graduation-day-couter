import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
  }
`;