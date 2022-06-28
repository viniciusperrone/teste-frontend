import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #43454C;
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    font-size: 28px;
    font-family: 'Roboto; sans-serif';
    font-weight: 700;
    color: #fff;
  }
`;