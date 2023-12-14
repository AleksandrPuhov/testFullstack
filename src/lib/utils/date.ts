import dayjs from "dayjs";

// TODO: settings
export const apiDateFormat = "DD.MM.YYYY";

export const formatDay = (date: Date | undefined | null) =>
  date ? dayjs(date).format(apiDateFormat) : undefined;

export const parseDay = (date: string | undefined | null) =>
  date ? dayjs(date, apiDateFormat).toDate() : null;
