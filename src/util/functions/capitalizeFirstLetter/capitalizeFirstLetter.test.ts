import capitalizeFirstLetter from './';

test('capitalize first letter', () => {
  expect(capitalizeFirstLetter('abc')).toBe('Abc');
});

test('first letter in empty', () => {
  expect(capitalizeFirstLetter(' abc')).toBe(' abc');
});

test('give a invalid string', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(capitalizeFirstLetter(123 as any)).toBe('');
});
