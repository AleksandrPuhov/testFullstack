import { persistentAtom } from "@nanostores/persistent";

export const collapsedStore = persistentAtom<string[] | undefined>(
  "moneybag-list-collapsed",
  undefined,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
