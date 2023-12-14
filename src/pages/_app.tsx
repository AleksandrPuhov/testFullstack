import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ZenStackHooksProvider } from "../lib/hooks";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { I18nProvider } from "@lingui/react";
import { DefaultLayout } from "@/layouts";
import { useLinguiInit } from "translations/utils";
import { type Messages } from "@lingui/core";
import Head from "next/head";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = {
  Component: NextPageWithLayout;
} & AppProps<{ session: Session; translation: Messages }>;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      staleTime: Infinity,
    },
  },
});

const MyApp = ({
  Component,
  pageProps: { session, translation, ...pageProps },
}: AppPropsWithLayout) => {
  const initializedI18n = useLinguiInit(translation);
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <ZenStackHooksProvider value={{ endpoint: "/api/model" }}>
          <I18nProvider i18n={initializedI18n}>
            <SessionProvider session={session} refetchOnWindowFocus={true}>
              <MantineProvider withGlobalStyles withNormalizeCSS>
                <Notifications />
                <ModalsProvider>
                  {getLayout(<Component {...pageProps} />)}
                </ModalsProvider>
              </MantineProvider>
            </SessionProvider>
          </I18nProvider>
        </ZenStackHooksProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
