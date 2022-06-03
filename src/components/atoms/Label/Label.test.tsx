import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../styles/theme';
import Label from '.';
import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';

test('render currect label', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Label>Label</Label>
    </ThemeProvider>
  );

  expect(getByText('Label')).toBeInTheDocument();
});

test('render icon', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Label Icon={() => <CloseSvg data-testid="svg" />}>With Icon</Label>
    </ThemeProvider>
  );

  expect(getByTestId('svg')).toBeInTheDocument();
});
