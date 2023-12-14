import { useRouter } from "next/router";
import { useDebouncedState } from "@mantine/hooks";
import { useUpdateEffect } from "usehooks-ts";
import { type StringKeyOf } from "type-fest";
import { type SchemaType, type Filter } from "@/lib/types";
import { type z } from "zod";
import { parseQueryParams } from "@/lib/utils/filter";
import { isArray, mapValues, omit } from "radash";

export const useFilterRoute = <T extends z.Schema, D = SchemaType<T>>(
  schema: T,
  initialValue?: D
): [D | undefined, (value: D) => void] => {
  const router = useRouter();
  const [valuesFilter, setValuesFilter] = useDebouncedState<D | undefined>(
    initialValue
      ? schema.parse(initialValue)
      : router.query
      ? schema.parse(
          mapValues(router.query, (value) => (isArray(value) ? value : [value]))
        )
      : undefined,
    300
  );

  const updateQuery: (query: Filter<StringKeyOf<D>> | undefined) => void = (
    newQuery
  ) => {
    void router.push({
      query: newQuery,
    });
  };

  useUpdateEffect(() => {
    if (!valuesFilter) {
      void router.push({
        query: {},
      });
    } else {
      const query = parseQueryParams(valuesFilter) as Filter<StringKeyOf<D>>;
      const oldQuery = omit(router.query, Object.keys(valuesFilter));

      updateQuery({ ...query, ...oldQuery });
    }
  }, [valuesFilter]);

  const setValues = (values: D) => {
    return setValuesFilter(schema.parse(values));
  };

  return [valuesFilter, setValues];
};
