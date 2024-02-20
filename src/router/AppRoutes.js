import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Services from "../pages/services";

// Route configuration
const routeConfig = [
  { path: "/", element: <Home />, exact: true },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  // Add more routes as needed
];

const AppRoutes = () => {
  return (
    <Routes>
      {routeConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
