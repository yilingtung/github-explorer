import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../styles/theme';
import ScrollTopButton from '.';

test('render currect ScrollTopButton', () => {
  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <ScrollTopButton />
    </ThemeProvider>
  );

  expect(getByRole('button')).toBeInTheDocument();
});
