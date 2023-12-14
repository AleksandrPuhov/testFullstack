import { useFindManyCurrency } from "../hooks";

type CurrencyOption = {
  value: string;
  label: string;
};

export const useCurrencyList = () => {
  return useFindManyCurrency({
    orderBy: {
      name: "asc",
    },
    select: {
      id: true,
      name: true,
      symbol: true,
      code: true,
      decimalDigits: true,
    },
  });
};

export const useCurrencyOptions = () => {
  const { data, ...queryProps } = useCurrencyList();

  return {
    ...queryProps,
    data: data?.map((currency) => ({
      value: currency.id,
      label: `${currency.name} (${currency.code})`,
    })) as CurrencyOption[],
  };
};
