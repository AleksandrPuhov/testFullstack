import { formatter } from "@lingui/format-po";

const locales = ["en", "ru"];

if (process.env.NODE_ENV !== "production") {
  locales.push("pseudo");
}

/** @type {import('@lingui/conf').LinguiConfig} */
const config = {
  locales: locales,
  sourceLocale: "en",
  pseudoLocale: "pseudo",
  catalogs: [
    {
      path: "translations/locales/{locale}",
      include: ["src/pages", "translations/languages.ts"],
    },
  ],
  format: formatter({ origins: false }),
};

export default config;
