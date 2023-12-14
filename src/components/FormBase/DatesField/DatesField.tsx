import { useMemo, useState } from "react";
import {
  setCurrentMonth,
  setCurrentWeek,
  setLastFourteenDays,
  setLastMonth,
  setLastSevenDays,
  setLastThirtyDays,
  setToday,
  setYesterday,
} from "./utils";
import { DatePicker } from "@mantine/dates";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Group,
  Input,
  NavLink,
  Popover,
  Stack,
} from "@mantine/core";
import { useUpdateEffect } from "usehooks-ts";
import { type DatesProps } from "./types";
import { useTsController } from "@ts-react/form";
import { intersects, isArray } from "radash";
import { formatDay } from "@/lib/utils/date";
import dayjs from "dayjs";

export const DatesField = ({}: DatesProps) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<[Date, Date]>();

  const [value, setValue] = useState<[Date | null, Date | null]>(
    field.value ?? [null, null]
  );
  const date = useMemo(
    () => new Date(new Date().getFullYear(), new Date().getMonth() - 1),
    []
  );

  const label = useMemo<string | undefined>(() => {
    if (!value[0] && !value[1]) return "";

    if (!value[0] || !value[1]) return "Выберите дату";

    if (value[0].toDateString() === value[1].toDateString()) {
      return formatDay(value[0]);
    }

    return `${formatDay(value[0])} - ${formatDay(value[1])}`;
  }, [value]);

  const clearValue = () => {
    setValue([null, null]);
  };

  const invalidValue = useMemo(() => !value[0] && !value[1], [value]);

  useUpdateEffect(() => {
    if (invalidValue) {
      field.onChange([undefined, undefined]);

      return;
    }

    if (!value[0] || !value[1]) return;

    field.onChange([value[0], value[1]]);
  }, [value]);

  useUpdateEffect(() => {
    if (isArray(field.value) && intersects(field.value, value)) return;

    setValue(field.value ?? [null, null]);
  }, [field.value]);

  const handleClick = (callback: () => [Date, Date]) => {
    setValue(callback());
  };

  const handleChange = ([start, end]: [Date, Date | null]) => {
    setValue([
      dayjs(start).startOf("day").toDate(),
      end ? dayjs(end).endOf("day").toDate() : null,
    ]);
  };

  return (
    <Box>
      <Popover
        position="bottom"
        transitionProps={{ transition: "pop" }}
        keepMounted={false}
        disabled={isSubmitting}
      >
        <Popover.Target>
          <div>
            <Input
              value={label}
              icon={<CalendarIcon size={"1rem"} />}
              placeholder="Выбрать период"
              miw={250}
              readOnly
              error={error?.errorMessage && error.errorMessage}
              rightSection={
                !invalidValue && (
                  <CloseButton
                    onClick={(e) => {
                      e.stopPropagation();
                      clearValue();
                    }}
                  />
                )
              }
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Group align="stretch">
            <Stack justify="space-between">
              <Box>
                <NavLink
                  label="Сегодня"
                  onClick={() => handleClick(setToday)}
                />
                <NavLink
                  label="Вчера"
                  onClick={() => handleClick(setYesterday)}
                />
                <NavLink
                  label="Эта неделя"
                  onClick={() => handleClick(setCurrentWeek)}
                />
                <NavLink
                  label="Этот месяц"
                  onClick={() => handleClick(setCurrentMonth)}
                />
                <NavLink
                  label="Прошлый месяц"
                  onClick={() => handleClick(setLastMonth)}
                />
                <NavLink
                  label="7 дней"
                  onClick={() => handleClick(setLastSevenDays)}
                />
                <NavLink
                  label="14 дней"
                  onClick={() => handleClick(setLastFourteenDays)}
                />
                <NavLink
                  label="30 дней"
                  onClick={() => handleClick(setLastThirtyDays)}
                />
              </Box>
            </Stack>
            <DatePicker
              type="range"
              value={value}
              onChange={handleChange}
              allowSingleDateInRange
              numberOfColumns={2}
              columnsToScroll={1}
              maxDate={new Date()}
              defaultDate={date}
            />
          </Group>

          <Flex justify="flex-end">
            <Button variant="default" onClick={clearValue} size="xs">
              Сбросить
            </Button>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};
