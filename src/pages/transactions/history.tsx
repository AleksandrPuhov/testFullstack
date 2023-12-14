import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { type Messages } from "@lingui/core";
import { TransactionList } from "@/feature/TransactionList";
import { Page, PageHeader } from "@/layouts";
import { Button, rem } from "@mantine/core";
import { Filter as FilterIcon } from "lucide-react";
import { useState } from "react";
import {
  TransactionFilter,
  TransactionFilterRouterSchema,
} from "@/feature/TransactionFilter";
import { useFilterRoute } from "@/utils/route";
// import { z } from "zod";

// const PageSchema = z.object({ page: z.number().nullish() });

export default function Transactions() {
  const [valuesFilter, setValuesFilter] = useFilterRoute(
    TransactionFilterRouterSchema
  );

  const [showFilter, setShowFilter] = useState(() => {
    if (!valuesFilter) return false;

    return !!Object.keys(valuesFilter).length;
  });

  return (
    <>
      <PageHeader
        title="History"
        actions={
          <Button
            size="xs"
            variant="outline"
            leftIcon={<FilterIcon size={rem(15)} />}
            title={"Create account"}
            onClick={() => setShowFilter((prev) => !prev)}
          >
            Filter
          </Button>
        }
      />
      <Page
        hidden
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {showFilter && (
          // @ts-ignore
          <TransactionFilter value={valuesFilter} onInput={setValuesFilter} />
        )}
        <TransactionList
          groupProps={{ bg: "gray.0" }}
          filter={valuesFilter}
          // onPageChange={(number) =>
          //   setPage({ page: number > 1 ? number : undefined })
          // }
        />
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
