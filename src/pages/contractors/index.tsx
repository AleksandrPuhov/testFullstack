import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { type Messages } from "@lingui/core";
import { ContractorForm } from "@/feature/ContractorForm";
import { ContractorList } from "@/feature/ContractorList";
import { useContractorList } from "@/lib/utils/contractor";
import { rem } from "@mantine/core";
import { Page, PageHeader } from "@/layouts";
import { ModalButton } from "@/components/ModalButton";
import { Plus } from "lucide-react";
import { DataLoader } from "@/components/DataLoader";
import { useContractorForm } from "@/feature/ContractorForm/hooks";
import { modals } from "@mantine/modals";

export default function Contractors() {
  const { data, isInitialLoading, isFetched } = useContractorList();
  const { onCreateSubmit } = useContractorForm();

  return (
    <>
      <PageHeader
        title="Contractors"
        actions={
          <ModalButton
            content={
              <ContractorForm
                onSubmit={onCreateSubmit}
                submitLabel="Create contractor"
                onSuccess={() => modals.closeAll()}
              />
            }
            size="xs"
            variant="outline"
            leftIcon={<Plus size={rem(16)} />}
            title={"Create contractor"}
          >
            Create contractor
          </ModalButton>
        }
      />

      <Page>
        <DataLoader loading={isInitialLoading || !isFetched}>
          <ContractorList value={data ?? []} />
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
