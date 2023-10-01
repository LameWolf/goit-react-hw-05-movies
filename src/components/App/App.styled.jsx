import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import bgi from '../../img/backgroundImg.jpg';

export const GlobalStyle = createGlobalStyle`
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*::before,
*::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('${bgi}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  img {
  display: block;
  max-width: 100%;
  height: auto;
}`;
