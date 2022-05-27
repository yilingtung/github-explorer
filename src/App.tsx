import styled, { ThemeProvider } from 'styled-components';

import Header from './components/organisms/Header';

import theme from './styles/theme';

const Container = styled.div`
  color: rgb(${(props) => props.theme.colors.netural400});
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
