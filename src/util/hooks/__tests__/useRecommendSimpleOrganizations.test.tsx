import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import { server } from '../../../setupTests';
import { createWrapper } from '../../tests/test-utils';

import useRecommendSimpleOrganizations from '../useRecommendSimpleOrganizations';

test('successful query useRecommendSimpleOrganizations', async () => {
  const { result } = renderHook(
    () => useRecommendSimpleOrganizations({ nameList: ['facebook', 'Dcard'] }),
    {
      wrapper: createWrapper({ queryClient: true }),
    }
  );

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data?.length).toBe(2);
});

test('failure query useRecommendSimpleOrganizations', async () => {
  server.use(
    rest.get('*', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  const { result } = renderHook(
    () => useRecommendSimpleOrganizations({ nameList: ['facebook', 'Dcard'] }),
    {
      wrapper: createWrapper({ queryClient: true }),
    }
  );

  await waitFor(() => expect(result.current.isError).toBe(true));

  expect(result.current.error).toBeDefined();
});
