import { renderHook, waitFor } from '@testing-library/react';

import { createWrapper } from '../../reactQueryTestHelper';
import useReadme from '../useReadme';

test('successful query useReadme', async () => {
  const { result } = renderHook(
    () =>
      useReadme({ org: 'facebook', repoName: 'react', defaultBarnch: 'main' }),
    {
      wrapper: createWrapper(),
    }
  );

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toBe('mocked getReadme');
});
