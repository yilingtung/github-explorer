import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import Label from '.';
import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';

test('should render currect label', () => {
  render(
    <ThemeProvider theme={theme}>
      <Label>Label</Label>
    </ThemeProvider>
  );

  expect(screen.getByText('Label')).toBeInTheDocument();
});

test('should render icon', () => {
  render(
    <ThemeProvider theme={theme}>
      <Label Icon={() => <CloseSvg data-testid="svg" />}>With Icon</Label>
    </ThemeProvider>
  );

  expect(screen.getByTestId('svg')).toBeInTheDocument();
});
