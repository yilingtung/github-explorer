import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../styles/theme';
import Tag from '.';

test('render currect label', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Tag>Tag</Tag>
    </ThemeProvider>
  );

  expect(getByText('Tag')).toBeInTheDocument();
});
