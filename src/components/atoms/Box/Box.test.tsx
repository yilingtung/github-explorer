import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import Box from '.';

test('text will show', () => {
  render(
    <ThemeProvider theme={theme}>
      <Box>Box</Box>
    </ThemeProvider>
  );

  expect(screen.getByText('Box')).toBeInTheDocument();
});

test('text will align center', () => {
  render(
    <ThemeProvider theme={theme}>
      <Box>Box</Box>
    </ThemeProvider>
  );

  expect(screen.getByText('Box')).toHaveStyle({
    'align-items': 'center',
  });
});

test('text will align start', () => {
  render(
    <ThemeProvider theme={theme}>
      <Box align="flex-start">Box</Box>
    </ThemeProvider>
  );

  expect(screen.getByText('Box')).toHaveStyle({
    'align-items': 'flex-start',
  });
});

test('text will align end', () => {
  render(
    <ThemeProvider theme={theme}>
      <Box align="flex-end">Box</Box>
    </ThemeProvider>
  );

  expect(screen.getByText('Box')).toHaveStyle({
    'align-items': 'flex-end',
  });
});
