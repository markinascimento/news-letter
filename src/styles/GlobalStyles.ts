import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #232742;
    -webkit-font-smoothing: antialiased;
    background: '#F0F0F0'
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;
