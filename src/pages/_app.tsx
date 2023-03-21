import "../styles/globals.css"
import { StyledEngineProvider } from "@mui/material/styles";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/core/graphql/client";

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <StyledEngineProvider injectFirst>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </StyledEngineProvider>
  );
}
