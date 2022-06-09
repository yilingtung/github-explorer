import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../setupTests';

import { createWrapper } from '../../reactQueryTestHelper';
import useRepo from '../useRepo';

test('successful query useRepo', async () => {
  const { result } = renderHook(
    () => useRepo({ org: 'facebook', repoName: 'react' }),
    {
      wrapper: createWrapper(),
    }
  );

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data?.name).toBe('mocked getRepo');
});

test('failure query useRepo', async () => {
  server.use(
    rest.get('*', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  const { result } = renderHook(
    () => useRepo({ org: 'facebook', repoName: 'react' }),
    {
      wrapper: createWrapper(),
    }
  );

  await waitFor(() => expect(result.current.isError).toBe(true));

  expect(result.current.error).toBeDefined();
});
