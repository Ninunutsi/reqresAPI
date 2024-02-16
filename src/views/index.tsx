import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LandingPage } from "./landing-page";
import React from "react";
import { Main } from "./main";
import { Data } from "./data";
import { DetailsPage } from "./details-page";
import { ProtectedRoute } from "../components/protectedRoute";
import { AddItem } from "./add-item";
import { NotFound } from "./not-found/notfound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/main",
    element: <ProtectedRoute element={<Main />} />,
  },
  {
    path: "/users",
    element: <ProtectedRoute element={<Data />} />,
  },
  {
    path: "/resources",
    element: <ProtectedRoute element={<Data />} />,
  },
  {
    path: "/users/:id",
    element: <ProtectedRoute element={<DetailsPage />} />,
  },
  {
    path: "/resources/:id",
    element: <ProtectedRoute element={<DetailsPage />} />,
  },
  {
    path: "/add-item",
    element: <ProtectedRoute element={<AddItem />} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};
