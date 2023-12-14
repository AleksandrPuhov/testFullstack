import { type MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/macro";

export interface Languages {
  locale: string;
  msg: MessageDescriptor;
}

export type LOCALES = "en" | "ru" | "pseudo";

const languages: Languages[] = [
  {
    locale: "en",
    msg: msg`English`,
  },
  {
    locale: "ru",
    msg: msg`Russian`,
  },
];

if (process.env.NODE_ENV !== "production") {
  languages.push({
    locale: "pseudo",
    msg: msg`Pseudo`,
  });
}

export default languages;
