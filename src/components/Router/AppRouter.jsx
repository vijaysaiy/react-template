import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { history } from "../../utils/history";
import Layout from "../Layout/Layout";
import LoginPage from "../LoginPage/LoginPage";
import NoRouteFound from "../NoRouteFound/NoRouteFound";
import Orders from "../Orders";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import UnauthorisedRoute from "../UnauthorisedRoute/UnauthorisedRoute";

const AppRouter = () => {
  return (
    <div>
      <Router history={history}>
        <Routes>
          {/* public routes */}
          <Route exact path="/" element={<LoginPage />} />
          {/* add more public routes if needed */}
          {/* end of public routes */}

          {/* Protected Routes */}
          <Route element={<Layout />}>
            {/*  outlet to allow only protected routes*/}
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/orders" element={<Orders />}>
                <Route exact path="/orders/create" element={<Orders />} />
              </Route>
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
