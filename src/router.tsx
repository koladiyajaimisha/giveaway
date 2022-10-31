import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import HomePageComponent from './components/home';
import CreateGiveawayContainer from './components/giveaway/create';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <HomePageComponent />
      }
    ]
  },
  {
    path: '/giveaway',
    element: <SidebarLayout />,
    children: [
      {
        path: '/giveaway/create',
        element: <CreateGiveawayContainer />
      }
    ]
  }
];

export default routes;
