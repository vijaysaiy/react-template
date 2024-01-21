import React from "react";
import Header from "../Header/Header";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-side-content">
        <Header />
        <div className="layout-main-content">
          <ProtectedRoutes />
        </div>
      </div>
    </div>
  );
};

export default Layout;
