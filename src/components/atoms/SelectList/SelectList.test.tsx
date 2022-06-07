import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import SelectList from '.';

test('render currect label', () => {
  render(
    <ThemeProvider theme={theme}>
      <SelectList>SelectList</SelectList>
    </ThemeProvider>
  );

  expect(screen.getByText('SelectList')).toBeInTheDocument();
});
