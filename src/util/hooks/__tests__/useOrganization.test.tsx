import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import { server } from '../../../setupTests';
import { createWrapper } from '../../tests/test-utils';

import useOrganization from '../useOrganization';

test('successful query useOrganization', async () => {
  const { result } = renderHook(() => useOrganization({ name: 'facebook' }), {
    wrapper: createWrapper({ queryClient: true }),
  });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data?.name).toBe('facebook');
});

test('failure query useOrganization', async () => {
  server.use(
    rest.get('*', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  const { result } = renderHook(() => useOrganization({ name: 'facebook' }), {
    wrapper: createWrapper({ queryClient: true }),
  });

  await waitFor(() => expect(result.current.isError).toBe(true));

  expect(result.current.error).toBeDefined();
});
