import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { history } from "../../utils/history";
import Layout from "../Layout/Layout";
import LoginPage from "../LoginPage/LoginPage";
import NoRouteFound from "../NoRouteFound/NoRouteFound";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import SamplePage from "../SamplePage/SamplePage";
import UnauthorisedRoute from "../UnauthorisedRoute/UnauthorisedRoute";

const AppRouter = () => {
  return (
    <div>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route element={<Layout />}>
            {/*  outlet to allow only protected routes*/}
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/sample" element={<SamplePage />} />
              {/* add more routes */}
            </Route>
            <Route exact path="/unauthorised" element={<UnauthorisedRoute />} />
            <Route exact path="*" element={<NoRouteFound />} />
            {/* End of Protected Routes */}
          </Route>
          <Route exact path="*" element={<NoRouteFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
