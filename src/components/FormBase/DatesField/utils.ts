import dayjs from "dayjs";

export const setToday = (): [Date, Date] => {
  const date = dayjs();
  const start = date.startOf("day").toDate();
  const end = date.endOf("day").toDate();

  return [start, end];
};

export const setYesterday = (): [Date, Date] => {
  const date = dayjs().subtract(1, "day");
  const start = date.startOf("day").toDate();
  const end = date.endOf("day").toDate();

  return [start, end];
};

export const setCurrentWeek = (): [Date, Date] => {
  const date = dayjs();
  const start = date.startOf("week").toDate();
  const end = date.endOf("week").toDate();

  return [start, end];
};

export const setCurrentMonth = (): [Date, Date] => {
  const date = dayjs();
  const start = date.startOf("month").toDate();
  const end = date.endOf("month").toDate();

  return [start, end];
};

export const setLastMonth = (): [Date, Date] => {
  const date = dayjs().subtract(1, "month");
  const start = date.startOf("month").toDate();
  const end = date.endOf("month").toDate();

  return [start, end];
};

export const setLastThirtyDays = (): [Date, Date] => {
  const date = dayjs();
  const start = date.subtract(30, "day").startOf("day").toDate();
  const end = date.endOf("day").toDate();

  return [start, end];
};

export const setLastFourteenDays = (): [Date, Date] => {
  const date = dayjs();
  const start = date.subtract(14, "day").startOf("day").toDate();
  const end = date.endOf("day").toDate();

  return [start, end];
};

export const setLastSevenDays = (): [Date, Date] => {
  const date = dayjs();
  const start = date.subtract(7, "day").startOf("day").toDate();
  const end = date.endOf("day").toDate();

  return [start, end];
};
