import getValidRepoFilters from '../getValidRepoFilters';

test('give incorrect params should return undefined', () => {
  expect(
    getValidRepoFilters({
      type: '123',
      sort: '123',
      direction: '123',
    })
  ).toStrictEqual({
    type: undefined,
    sort: undefined,
    direction: undefined,
  });
});

test('give related params should return related value', () => {
  expect(
    getValidRepoFilters({
      type: 'all',
      sort: '123',
      direction: 'desc',
    })
  ).toStrictEqual({
    type: 'all',
    sort: undefined,
    direction: 'desc',
  });
});
