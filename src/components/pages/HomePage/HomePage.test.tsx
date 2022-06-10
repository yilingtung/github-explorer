import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { customRender } from '../../../util/tests/test-utils';
import HomePage from './';

describe('Home page', () => {
  beforeEach(() => {
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

  test('should search organization input', async () => {
    customRender(
      <Router>
        <HomePage />
      </Router>,
      {
        theme: true,
        queryClient: true,
      }
    );

    // should show organization search input
    expect(
      screen.getByPlaceholderText('Search Organization')
    ).toBeInTheDocument();
  });

  test('should show banner', async () => {
    customRender(
      <Router>
        <HomePage />
      </Router>,
      {
        theme: true,
        queryClient: true,
      }
    );

    expect(screen.getByAltText('banner')).toBeInTheDocument();
  });

  test('should show recommend organizations', async () => {
    const result = customRender(
      <Router>
        <HomePage />
      </Router>,
      {
        theme: true,
        queryClient: true,
      }
    );

    // should show recommend organizations
    expect(await result.findByText(/Dcard/i)).toBeInTheDocument();
  });
});
