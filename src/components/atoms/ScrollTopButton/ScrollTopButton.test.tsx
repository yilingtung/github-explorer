import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import ScrollTopButton from '.';

test('render currect ScrollTopButton', async () => {
  render(
    <ThemeProvider theme={theme}>
      <ScrollTopButton />
    </ThemeProvider>
  );

  expect(screen.getByRole('button')).toBeInTheDocument();
});
