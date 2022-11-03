import { RouteObject } from "react-router";

import SidebarLayout from "src/layouts/SidebarLayout";

import HomePageComponent from "./components/home";
import CreateGiveawayContainer from "./components/giveaway/create";
import ManageGiveaway from "./components/giveaway/manage";

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
