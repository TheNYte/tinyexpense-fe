import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ChakraProvider} from '@chakra-ui/react';

const queryClient = new QueryClient();

// https://vike.dev/onRenderClient
export {onRenderClient};

import React from 'react';
import ReactDOM from 'react-dom/client';
import {PageShell} from './PageShell';
import {getPageTitle} from './getPageTitle';
import type {OnRenderClientAsync} from 'vike/types';
import {CookiesProvider} from 'react-cookie';

let root: ReactDOM.Root;
const onRenderClient: OnRenderClientAsync = async (
  pageContext,
): ReturnType<OnRenderClientAsync> => {
  const {Page} = pageContext;
  const page = (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <PageShell pageContext={pageContext}>
            <Page />
          </PageShell>
        </CookiesProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
  const container = document.getElementById('react-root')!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};
