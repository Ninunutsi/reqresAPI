import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LandingPage } from "./landing-page";
import React from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
];

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};
