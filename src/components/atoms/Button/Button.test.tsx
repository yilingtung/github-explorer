import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../styles/theme';
import Button from './';

test('render currect label', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button>Hello world</Button>
    </ThemeProvider>
  );

  expect(getByText('Hello world')).toBeInTheDocument();
});
