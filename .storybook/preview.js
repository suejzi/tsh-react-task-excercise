import i18n from "../src/locales/i18n";

export const parameters = {
  i18n,
  locale: "en",
  locales: {
    en: "English",
    pl: "Polish",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
