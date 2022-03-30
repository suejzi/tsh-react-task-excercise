import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "../locales/i18n";
import { I18nextProvider } from "react-i18next";
import GlobalStyle from "../assets/styles/GlobalStyle";
import ResetCSS from "../assets/styles/ResetCSS";
import { ProductProvider } from "../utils/context/Context";

export const AppProviders: FC = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <ResetCSS />
    <GlobalStyle />
    <ProductProvider>
      <Router>{children}</Router>
    </ProductProvider>
  </I18nextProvider>
);
