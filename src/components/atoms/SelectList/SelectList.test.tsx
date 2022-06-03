import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../styles/theme';
import SelectList from '.';

test('render currect label', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <SelectList>SelectList</SelectList>
    </ThemeProvider>
  );

  expect(getByText('SelectList')).toBeInTheDocument();
});
