import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Login } from "pages/login/Login";
import { Products } from "pages/products/Products";

import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.Home} exact component={Products} />
      <Route path={AppRoute.Login} component={Login} />

      <Redirect to={AppRoute.Home} />
    </Switch>
  );
};
