import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import Modal from '.';

test('should render modal', () => {
  render(
    <ThemeProvider theme={theme}>
      <Modal>Modal</Modal>
    </ThemeProvider>
  );

  expect(screen.getByText('Modal')).toBeInTheDocument();
});

test('click close button should fire onDeactive', () => {
  const deactiveFunc = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <Modal onDeactive={deactiveFunc}>Modal</Modal>
    </ThemeProvider>
  );

  fireEvent.click(screen.getByRole('button'));
  expect(deactiveFunc).toHaveBeenCalledTimes(1);
});

test('click the text inside modal should not fire onDeactive', () => {
  const deactiveFunc = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <Modal onDeactive={deactiveFunc}>
        <span>text</span>
      </Modal>
    </ThemeProvider>
  );

  const innerText = screen.getByText('text');

  fireEvent.click(innerText);
  expect(deactiveFunc).toHaveBeenCalledTimes(0);
});
