import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import SelectOption from '.';

test('render currect label', () => {
  render(
    <ThemeProvider theme={theme}>
      <SelectOption>SelectOption</SelectOption>
    </ThemeProvider>
  );

  expect(screen.getByText('SelectOption')).toBeInTheDocument();
});
