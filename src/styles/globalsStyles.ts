import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC', BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  a {
    color: inherit;
    /* text-decoration: none; */
  }
`;

export default GlobalStyle;
