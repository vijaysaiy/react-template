import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Header from "../Header/Header";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";
const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-side-content">
        <Header />
        <div className="layout-main-content">
          <ErrorBoundary>
            <ProtectedRoutes />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default Layout;
