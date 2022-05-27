import styled, { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import './App.css';

const Container = styled.div`
  color: rgb(${(props) => props.theme.colors.netural400});
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>123</Container>
    </ThemeProvider>
  );
}

export default App;
