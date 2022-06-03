import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../styles/theme';
import SelectOption from '.';

test('render currect label', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <SelectOption>SelectOption</SelectOption>
    </ThemeProvider>
  );

  expect(getByText('SelectOption')).toBeInTheDocument();
});
