import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../../styles/theme';
import Input from './';

test('input should has value as props passed', () => {
  const handleChange = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Input value={'123'} onChange={handleChange} />
    </ThemeProvider>
  );
  const input = screen.getByLabelText('input') as HTMLInputElement;

  expect(input).toHaveValue('123');
});

test('change input should trigger onChange event', () => {
  const handleChange = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Input onChange={handleChange} />
    </ThemeProvider>
  );
  const input = screen.getByLabelText('input') as HTMLInputElement;

  fireEvent.change(input, { target: { value: '123' } });

  expect(handleChange).toHaveBeenCalledTimes(1);

  expect(handleChange).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({
        value: '123',
      }),
    })
  );
});
