import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from './styles/theme';
import ScrollToTop from './components/atoms/ScrollToTop';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
