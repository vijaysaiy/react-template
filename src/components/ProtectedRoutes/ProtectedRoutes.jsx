import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = () => {
    // write your logic
    return true;
  };
  return <>{isAuthenticated() ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutes;
