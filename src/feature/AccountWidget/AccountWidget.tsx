import { useMemo, useState } from "react";
import { Accordion, Center, Loader, Stack, rem } from "@mantine/core";
import { collapsedStore } from "./store";
import { useAccountWidget } from "@/lib/utils/account";
import { AccountWidgetControl } from "./AccountWidgetControl";
// import { MoneyTag } from "@/components/MoneyTag";
import { AccountWidgetItem } from "./AccountWidgetItem";
import { useStyles } from "./styles";
import { sum } from "./utils";

export const AccountWidget = () => {
  const { data = [], isLoading, isFetched } = useAccountWidget();

  const { classes } = useStyles();
  const [collapsed, setCollasped] = useState<string[] | undefined>(() =>
    collapsedStore.get()
  );

  const list = useMemo(() => {
    return data.map((group) => ({
      ...group,
      sum: sum(group.accounts),
    }));
  }, [data]);
  const defaultValue = useMemo(() => list?.map((group) => group.id), [list]);

  if (!isFetched)
    return (
      <Center py={"lg"}>
        <Loader />
      </Center>
    );

  if (isFetched && !isLoading && !list.length) {
    return "Нет доступных счетов для просмотра"; //<Message message="Данные не найдены" />;
  }

  return (
    <Accordion
      mx="auto"
      variant="filled"
      chevron={false}
      classNames={classes}
      multiple
      defaultValue={defaultValue}
      value={collapsed}
      onChange={(value) => {
        collapsedStore.set(value);
        setCollasped(value);
      }}
      styles={{
        chevron: {
          display: "none",
        },
        control: {
          padding: `${0} ${rem(12)}`,
        },
        content: {
          padding: `${rem(4)} ${rem(12)}`,
        },
      }}
    >
      {list?.map(({ accounts = [], sum, name, id }) => (
        <Accordion.Item value={id} key={id}>
          <Accordion.Control>
            <AccountWidgetControl label={name} id={id}>
              {/* TODO: currencies */}
              {/* <MoneyTag
                sx={(theme) => ({
                  fontWeight: 600,
                  color: theme.colors.gray[7],
                })}
                count={sum}
              /> */}
            </AccountWidgetControl>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack spacing={"md"}>
              {accounts.map((item) => (
                <AccountWidgetItem key={item.id} {...item} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
