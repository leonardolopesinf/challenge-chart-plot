import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {   
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 62.5%;
  }
  
  #root {
    display: flex;
    flex-direction: column;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
