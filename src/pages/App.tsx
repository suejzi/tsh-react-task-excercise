import React from "react";
import ResetCSS from "../assets/styles/ResetCSS";

import { AppRoutes } from "routes/AppRoutes";
import GlobalStyle from "../assets/styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};
