import { useRoutes } from 'react-router-dom';

import SiteLayout from '../components/layouts/SiteLayout';
import HomePage from '../components/pages/HomePage';
import OrganizationPage from '../components/pages/OrganizationPage';

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
          element: <OrganizationPage />,
        },
      ],
    },
  ]);

  return element;
};

export default Routes;
