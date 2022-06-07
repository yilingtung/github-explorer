import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import Tag from '.';

test('render currect label', () => {
  render(
    <ThemeProvider theme={theme}>
      <Tag>Tag</Tag>
    </ThemeProvider>
  );

  expect(screen.getByText('Tag')).toBeInTheDocument();
});
