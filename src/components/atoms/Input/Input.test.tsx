import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../../styles/theme';
import Input from './';

const setup = (inputValue?: string) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Input value={inputValue} onChange={() => console.log('onChange')} />
    </ThemeProvider>
  );
  const input = utils.getByLabelText('input') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test('it should change input value to 123', () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).toBe('123');
});
