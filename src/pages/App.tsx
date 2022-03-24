import React from "react";
import ResetCSS from "../assets/styles/ResetCSS";
import { ThemeColors } from "../assets/styles/common/ThemeColors";

import { AppRoutes } from "routes/AppRoutes";
import GlobalStyle from "../assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={ThemeColors}>
        <ResetCSS />
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
};
