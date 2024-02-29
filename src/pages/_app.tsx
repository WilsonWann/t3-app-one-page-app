import type { Session } from "next-auth";
import { Provider as JotaiProvider } from "jotai";
import { SessionProvider } from "next-auth/react";
import type { AppProps, AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <JotaiProvider>{getLayout(<Component {...pageProps} />)}</JotaiProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
