import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Login } from "pages/login/Login";
import { Products } from "pages/products/Products";

import { AppRoute } from "./AppRoute.enum";
import { NotFound } from "../pages/404/NotFound";

export const AppRoutes: FC = () => {
  return (
    <Switch>
      <Route path={AppRoute.Home} exact component={Products} />
      <Route path={AppRoute.Login} component={Login} />
      <Route path="*" component={NotFound} />
      <Redirect to={AppRoute.Home} />
    </Switch>
  );
};
