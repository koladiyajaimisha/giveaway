import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SidebarLayout from "src/layouts/SidebarLayout";

import SuspenseLoader from "src/components/SuspenseLoader";
import HomePageComponent from "./components/home";
import CreateGiveawayContainer from "./components/giveaway/create";
import ManageGiveaway from "./components/giveaway/manage";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards

const routes: RouteObject[] = [
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <HomePageComponent />,
      },
    ],
  },
  {
    path: "/giveaway",
    element: <SidebarLayout />,
    children: [
      {
        path: "/giveaway/create",
        element: <CreateGiveawayContainer />,
      },
      {
        path: "/giveaway/manage",
        element: <ManageGiveaway />,
      },
    ],
  },
];

export default routes;
