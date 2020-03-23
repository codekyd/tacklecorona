import React, { lazy, Suspense } from 'react';

const LazyDrawToggleButton = lazy(() => import('./DrawToggleButton'));

const DrawToggleButton = props => (
  <Suspense fallback={null}>
    <LazyDrawToggleButton {...props} />
  </Suspense>
);

export default DrawToggleButton;
