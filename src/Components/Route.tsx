import React, { ReactNode } from "react";
import ManiDahboard from "../Pages/ManiDahboard";
import User from "../Pages/User";
import Tickets from "../Pages/Tickets";
import { Routes, Route } from "react-router-dom";

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
      path: "/user",
      element: <User />,
    },
    {
      path: "/tickets",
      element: <Tickets />,
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
