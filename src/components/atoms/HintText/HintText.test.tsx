import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import HintText from '.';

test('render currect label', () => {
  render(
    <ThemeProvider theme={theme}>
      <HintText>HintText</HintText>
    </ThemeProvider>
  );

  expect(screen.getByText('HintText')).toBeInTheDocument();
});
