import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';

import theme from '../../../styles/theme';
import Button from './';

test('render currect label', () => {
  render(
    <ThemeProvider theme={theme}>
      <Button>Hello world</Button>
    </ThemeProvider>
  );

  expect(
    screen.getByRole('button', { name: 'Hello world' })
  ).toBeInTheDocument();
});

test("medium button's height should be 48px", () => {
  render(
    <ThemeProvider theme={theme}>
      <Button size="medium">Hello world</Button>
    </ThemeProvider>
  );

  expect(screen.getByRole('button', { name: 'Hello world' })).toHaveStyle({
    height: '48px',
  });
});

test("small button's height should be 40px", () => {
  render(
    <ThemeProvider theme={theme}>
      <Button size="small">Hello world</Button>
    </ThemeProvider>
  );

  expect(screen.getByRole('button', { name: 'Hello world' })).toHaveStyle({
    height: '40px',
  });
});

test('should trigger click event', () => {
  const handleClick = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <Button onClick={handleClick}>Hello world</Button>
    </ThemeProvider>
  );

  const buttom = screen.getByRole('button', { name: 'Hello world' });

  fireEvent.click(buttom);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('should be disabled', () => {
  const handleClick = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <Button disabled onClick={handleClick}>
        Hello world
      </Button>
    </ThemeProvider>
  );

  const buttom = screen.getByRole('button', { name: 'Hello world' });

  expect(buttom).toBeDisabled();

  fireEvent.click(buttom);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
