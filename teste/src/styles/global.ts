import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    font-size: 28px;
    font-family: 'Titan One', cursive;
    font-weight: 700;
    color: #80DBC4;
  }
  span {
    cursor: pointer;
  }
`;