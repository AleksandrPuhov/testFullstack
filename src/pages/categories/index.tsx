import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { type Messages } from "@lingui/core";
import { CategoryForm, useCategoryForm } from "@/feature/CategoryForm";
import { CategoryList } from "@/feature/CategoryList";
import { useCategoryList } from "@/lib/utils/category";
import { useMemo } from "react";
import { sortItems } from "@/utils/sort";
import { TransactionType } from "@prisma/client";
import { ActionIcon, Group, Stack, Title, rem } from "@mantine/core";
import { Plus, PlusCircle } from "lucide-react";
import { ModalButton } from "@/components/ModalButton";
import { DataLoader } from "@/components/DataLoader";
import { Page, PageHeader } from "@/layouts";
import { modals } from "@mantine/modals";

export default function Categories() {
  const { data, isInitialLoading, isFetched } = useCategoryList();
  const { onCreateSubmit } = useCategoryForm();

  const items = useMemo(() => {
    const sort = sortItems(data ?? []);

    return [
      {
        id: TransactionType.INCOME,
        title: "Income",
        value: sort.filter((item) => item.type === TransactionType.INCOME),
      },
      {
        id: TransactionType.OUTCOME,
        title: "Outcome",
        value: sort.filter((item) => item.type === TransactionType.OUTCOME),
      },
      {
        id: TransactionType.TRANSFER,
        title: "Transfer",
        value: sort.filter((item) => item.type === TransactionType.TRANSFER),
      },
    ];
  }, [data]);

  return (
    <>
      <PageHeader
        title="Categories"
        actions={
          <Group spacing="xs" position="right">
            <ModalButton
              content={
                <CategoryForm
                  onSubmit={onCreateSubmit}
                  submitLabel="Create category"
                  onSuccess={() => modals.closeAll()}
                />
              }
              size="xs"
              variant="outline"
              leftIcon={<Plus size={rem(15)} />}
              title={"Create category"}
            >
              Create category
            </ModalButton>
          </Group>
        }
      />

      <Page>
        <DataLoader loading={isInitialLoading || !isFetched}>
          <Stack spacing="xl">
            {items.map((item) => (
              // @ts-ignore: TODO: fix types
              <CategoryList
                key={item.title}
                {...item}
                title={
                  <Group spacing="xs">
                    <Title size="lg">{item.title}</Title>
                    <ModalButton
                      component={ActionIcon}
                      content={
                        <CategoryForm
                          initialValues={{
                            type: item.id,
                          }}
                          onSubmit={onCreateSubmit}
                          submitLabel="Create category"
                          onSuccess={() => modals.closeAll()}
                        />
                      }
                      title={"Create category"}
                    >
                      <PlusCircle size={rem(16)} />
                    </ModalButton>
                  </Group>
                }
              />
            ))}
          </Stack>
        </DataLoader>
      </Page>
    </>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    translation: Messages;
  }>
> {
  return {
    props: {
      translation: await loadCatalog(ctx.locale!),
    },
  };
}
