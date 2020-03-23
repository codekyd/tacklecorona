import React, { lazy, Suspense } from 'react';

const LazySideBar = lazy(() => import('./SideBar'));

const SideBar = props => (
  <Suspense fallback={null}>
    <LazySideBar {...props} />
  </Suspense>
);

export default SideBar;
