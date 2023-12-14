import { construct, mapValues, shake, crush, isDate, isNumber } from "radash";

export const parseQueryParams = (object: object) => {
  return construct(
    mapValues(shake(crush(object)), (value) => {
      if (isDate(value)) {
        return (value as Date).toISOString();
      }

      if (isNumber(value)) {
        return (value as number).toString();
      }

      return value;
    })
  );
};
