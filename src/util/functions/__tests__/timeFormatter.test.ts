import timeFormatter from '../timeFormatter';

test('give a valid string', () => {
  expect(timeFormatter('2012-03-08T02:10:13Z')).toBe('2012-03-08 10:10');
});

test('give an empty string', () => {
  expect(timeFormatter('')).toBe('');
});

test('give an object', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(timeFormatter({} as any)).toBe('');
});

test('give a not valid string', () => {
  expect(timeFormatter('hello word')).toBe('');
});
