import { Navigate, Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/components/:menu" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
