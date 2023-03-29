import React, { ReactNode } from "react";
import ManiDahboard from "../Pages/ManiDahboard";
import Tickets from "../Pages/Tickets";
import { Routes, Route } from "react-router-dom";
import Error from "./Error/Error";

interface RoutesInterface {
  path: string;
  element: ReactNode;
}

const NavRoutes = () => {
  let routesElement: RoutesInterface[] = [
    {
      path: "/",
      element: <ManiDahboard />,
    },
    {
      path: "/tickets",
      element: <Tickets />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
  return (
    <Routes>
      {routesElement.map((items, index) => {
        return <Route path={items.path} element={items.element} key={index} />;
      })}
    </Routes>
  );
};

export default NavRoutes;
