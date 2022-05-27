import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import SiteLayout from '../components/layouts/SiteLayout';
import HomePage from '../components/pages/HomePage';

const Routes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <SiteLayout />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
      ],
    },
  ]);

  return element;
};

export default Routes;
