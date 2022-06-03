import { addDecorator } from '@storybook/react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalsStyles';

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Normalize />
      <GlobalStyle />
      <Story />
    </>
  ),
];
