import { fireEvent, screen } from '@testing-library/react';
import { Router, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { customRender } from '../../../util/tests/test-utils';
import OrganizationPage from './';

// mock autoSizer
// see more https://github.com/bvaughn/react-window/issues/454#issuecomment-646031139
jest.mock(
  'react-virtualized-auto-sizer',
  () =>
    ({ children }: any) =>
      children({ height: 600, width: 600 })
);

describe('Organization page', () => {
  beforeEach(() => {
    // mock IntersectionObserver
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    // mock matchMedia
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });

  test('should show organization data', async () => {
    const history = createMemoryHistory();
    history.push('/facebook');

    const result = customRender(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/:org" element={<OrganizationPage />} />
        </Routes>
      </Router>,
      {
        theme: true,
        queryClient: true,
      }
    );

    // check the routing first
    expect(history.location.pathname).toBe('/facebook');

    // should show the organization name
    expect(await result.findByText(/facebook/i)).toBeInTheDocument();
  });

  test('change filter should change url search params', async () => {
    const history = createMemoryHistory();
    history.push('/facebook');

    const result = customRender(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/:org" element={<OrganizationPage />} />
        </Routes>
      </Router>,
      {
        theme: true,
        queryClient: true,
      }
    );

    // search params should be empty first
    expect(history.location.search).toBe('');

    // get direction filter
    expect(screen.getByText('Asc')).toBeInTheDocument();

    // click the filter should open select options
    fireEvent.click(screen.getByText('Asc'));
    expect(await result.findByText('Desc')).toBeInTheDocument();

    // click the select options should change url search params
    fireEvent.click(screen.getByText('Desc'));
    expect(await result.findByText('repo1')).toBeInTheDocument();
    expect(history.location.search).toBe('?direction=desc');
  });
});
