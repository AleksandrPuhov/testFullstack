import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { type Messages } from "@lingui/core";
import { ActionIcon, Stack, Title, rem, Group } from "@mantine/core";
import { AccountGroupForm } from "@/feature/AccountGroupForm";
import { AccountForm, useAccountForm } from "@/feature/AccountForm";
import { AccountList } from "@/feature/AccountList";
import { useAccountList } from "@/lib/utils/account";
import { FolderClosed, Plus, PlusCircle } from "lucide-react";
import { ModalButton } from "@/components/ModalButton";
import { Page, PageHeader } from "@/layouts";
import { modals } from "@mantine/modals";
import { DataLoader } from "@/components/DataLoader";

export default function Accounts() {
  const { data, isInitialLoading, isFetched } = useAccountList();
  const { onCreateSubmit } = useAccountForm();

  return (
    <>
      <PageHeader
        title="Accounts"
        actions={
          <Group spacing="xs" position="right">
            <ModalButton
              content={
                <AccountForm
                  onSubmit={onCreateSubmit}
                  submitLabel="Create account"
                  onSuccess={() => modals.closeAll()}
                />
              }
              size="xs"
              variant="outline"
              leftIcon={<Plus size={rem(15)} />}
              title={"Create account"}
            >
              Create account
            </ModalButton>
            <ModalButton
              content={<AccountGroupForm />}
              size="xs"
              variant="outline"
              leftIcon={<FolderClosed size={rem(15)} />}
              title={"Create account group"}
            >
              Create account group
            </ModalButton>
          </Group>
        }
      />

      <Page>
        <DataLoader loading={isInitialLoading || !isFetched}>
          <Stack spacing="xl">
            {data?.map((accountGroup) => (
              <AccountList
                key={accountGroup.id}
                value={accountGroup.accounts}
                title={
                  <Group spacing="xs">
                    <Title size="lg">{accountGroup.name}</Title>
                    <ModalButton
                      component={ActionIcon}
                      content={
                        <AccountForm
                          initialValues={{
                            groupId: accountGroup.id,
                          }}
                          onSubmit={onCreateSubmit}
                          submitLabel="Create account"
                          onSuccess={() => modals.closeAll()}
                        />
                      }
                      title={"Create account"}
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
