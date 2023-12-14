import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { type Messages } from "@lingui/core";
import { CurrencyList } from "@/feature/CurrencyList";
import { Page, PageHeader } from "@/layouts";
import { useCurrencyList } from "@/lib/utils/currency";
import { DataLoader } from "@/components/DataLoader";

export default function Currencies() {
  const { data, isInitialLoading, isFetched } = useCurrencyList();

  return (
    <>
      <PageHeader title="Currencies" />

      <Page>
        <DataLoader loading={isInitialLoading || !isFetched}>
          <CurrencyList value={data!} />
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
