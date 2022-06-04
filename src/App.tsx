import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import SiteLayout from './components/layouts/SiteLayout';
import ScrollToTop from './components/atoms/ScrollToTop';
import Box from './components/atoms/Box';
import Loading from './components/atoms/Loading';

const HomePage = lazy(
  () => import(/* webpackChunkName: "home" */ './components/pages/HomePage')
);

const OrganizationPage = lazy(
  () =>
    import(
      /* webpackChunkName: "organization" */ './components/pages/OrganizationPage'
    )
);

const RepoPage = lazy(
  () => import(/* webpackChunkName: "repo" */ './components/pages/RepoPage')
);

function App() {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(() => location);
  const isModal =
    location.state &&
    (location.state as { modal?: boolean }).modal &&
    previousLocation !== location;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!(location.state && (location.state as { modal?: boolean }).modal)) {
      setPreviousLocation(location);
    }
  });

  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <Box>
            <Loading />
          </Box>
        }
      >
        <Routes location={isModal ? previousLocation : location}>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path=":org">
              <Route index element={<OrganizationPage />} />
              <Route path=":repo" element={<RepoPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
