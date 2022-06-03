import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import theme from '../../../styles/theme';
import Modal from '.';

test('render modal', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Modal>Modal</Modal>
    </ThemeProvider>
  );

  expect(getByText('Modal')).toBeInTheDocument();
});

test('click close button should fire onDeactive', () => {
  const deactiveFunc = jest.fn();

  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <Modal onDeactive={deactiveFunc}>Modal</Modal>
    </ThemeProvider>
  );

  fireEvent.click(getByRole('button'));
  expect(deactiveFunc.mock.calls.length).toEqual(1);
});
