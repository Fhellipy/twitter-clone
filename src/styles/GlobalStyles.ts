import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *,button, input {
    border: 0;
    background-color: none;
    font-size: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  html {
    background: var(--background);
  }
  
  :root {
    --primary: #25363c;
    --on-primary: #f3f4f4;
    --secondary: #137699;
    --on-secondary: #9be2fb;
    --background: #fcfcfc;
    --white: #fff;
    --black: #000;
  }
`;
