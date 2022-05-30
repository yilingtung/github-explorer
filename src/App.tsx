import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import ScrollToTop from './components/atoms/ScrollToTop';
import SiteLayout from './components/layouts/SiteLayout';
import HomePage from './components/pages/HomePage';
import OrganizationPage from './components/pages/OrganizationPage';
import RepoPage from './components/pages/RepoPage';

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
      <Routes location={isModal ? previousLocation : location}>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":org">
            <Route index element={<OrganizationPage />} />
            <Route path=":repo" element={<RepoPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
