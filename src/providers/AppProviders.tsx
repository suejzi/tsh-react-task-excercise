import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "../locales/i18n";
import { I18nextProvider } from "react-i18next";
import GlobalStyle from "../assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ThemeColors } from "../assets/styles/common/ThemeColors";
import ResetCSS from "../assets/styles/ResetCSS";
import { ProductProvider } from "../utils/context/Context";

export const AppProviders: FC = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={ThemeColors}>
      <ResetCSS />
      <GlobalStyle />
      <ProductProvider>
        <Router>{children}</Router>
      </ProductProvider>
    </ThemeProvider>
  </I18nextProvider>
);
