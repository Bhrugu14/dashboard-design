import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainContainer from "../container/mainContainer";
import { DynamicScreen, ErrorElement, Home, Other } from "../screens";
import { routesData } from "./constant";
// import { getWithExpiry } from "../utils";

const renderScreen = () => {
  const data = routesData.map((i, k) => {
    const Element = i.screen;
    return { path: i.path, element: <Element title={i.title} /> };
  });
  console.log("data", data);
  return data;
};

const router = createBrowserRouter([
  {
    errorElement: <ErrorElement />,
    element: <MainContainer />,
    children: renderScreen(),
  },
]);

export default router;
