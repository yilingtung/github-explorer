import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../setupTests';

import { createWrapper } from '../../reactQueryTestHelper';
import useRepos from '../useRepos';

test('successful query useRepos', async () => {
  const { result } = renderHook(() => useRepos({ org: 'facebook' }), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  // useRepos is using 'useInfiniteQuery',
  // data is now an object containing infinite query data
  // see more https://react-query.tanstack.com/guides/infinite-queries
  expect(result.current.data?.pages.length).toBe(1);
  expect(result.current.data?.pages[0].data.length).toBe(2);
});

test('failure query useRepos', async () => {
  server.use(
    rest.get('*', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  const { result } = renderHook(() => useRepos({ org: 'facebook' }), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isError).toBe(true));

  expect(result.current.error).toBeDefined();
});
