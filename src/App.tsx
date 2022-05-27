import { useCallback, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import InputSearch from './components/molecules/InputSearch';

import theme from './styles/theme';

const Container = styled.div`
  color: rgb(${(props) => props.theme.colors.netural400});
`;

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleInputClear = useCallback(() => {
    setInputValue('');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <InputSearch
          value={inputValue}
          onChange={handleInputChange}
          onClearValue={handleInputClear}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
