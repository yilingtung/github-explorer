import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../styles/theme';
import HintText from '.';

test('render currect label', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <HintText>HintText</HintText>
    </ThemeProvider>
  );

  expect(getByText('HintText')).toBeInTheDocument();
});
