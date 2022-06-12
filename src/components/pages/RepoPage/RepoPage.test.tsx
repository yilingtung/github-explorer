import { Router, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { customRender } from '../../../util/tests/test-utils';
import RepoPage from '.';

describe('RepoPage page', () => {
  test('should show repo data', async () => {
    const history = createMemoryHistory();
    history.push('/facebook/react');

    const result = customRender(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/:org/:repo" element={<RepoPage />} />
        </Routes>
      </Router>,
      {
        theme: true,
        queryClient: true,
      }
    );

    // check the routing first
    expect(history.location.pathname).toBe('/facebook/react');

    // should show the organization name
    expect(await result.findByText(/facebook/i)).toBeInTheDocument();

    // should show readme data
    expect(await result.findByText(/mocked getReadme/i)).toBeInTheDocument();
  });
});
