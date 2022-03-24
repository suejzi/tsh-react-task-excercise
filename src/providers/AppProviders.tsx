import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "../locales/i18n";

import { AppProvidersProps } from "./AppProviders.types";
import { I18nextProvider } from "react-i18next";

export const AppProviders = ({ children }: AppProvidersProps) => (
  <I18nextProvider i18n={i18n}>
    <Router>{children}</Router>
  </I18nextProvider>
);
