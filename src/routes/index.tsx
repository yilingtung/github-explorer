import { useRoutes } from 'react-router-dom';

import SiteLayout from '../components/layouts/SiteLayout';
import HomePage from '../components/pages/HomePage';
import OrganizationPage from '../components/pages/OrganizationPage';
import RepoPage from '../components/pages/RepoPage';

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
        {
          path: ':org',
          children: [
            {
              path: '',
              element: <OrganizationPage />,
            },
            {
              path: ':repo',
              element: <RepoPage />,
            },
          ],
        },
      ],
    },
  ]);

  return element;
};

export default Routes;
