import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ReactDOMServer from 'react-dom/server';
import {ChakraProvider} from '@chakra-ui/react';
const queryClient = new QueryClient();
import {escapeInject, dangerouslySkipEscape} from 'vike/server';

// https://vike.dev/onRenderHtml
export {onRenderHtml};

import React from 'react';
import {PageShell} from './PageShell';
import {getPageTitle} from './getPageTitle';
import type {OnRenderHtmlAsync} from 'vike/types';
import {CookiesProvider} from 'react-cookie';
import favicon from '#root/public/app_icon_192.svg';

const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext,
): ReturnType<OnRenderHtmlAsync> => {
  const {Page} = pageContext;

  const pageHtml = ReactDOMServer.renderToString(
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <PageShell pageContext={pageContext}>
            <Page />
          </PageShell>
        </CookiesProvider>
      </QueryClientProvider>
    </ChakraProvider>,
  );

  const title = getPageTitle(pageContext);
  const {documentProps} = pageContext.exports;
  const desc =
    (documentProps && documentProps.description) || 'App using Vite + Vike';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <base href=".">
        <meta charset="UTF-8" />
        <link rel="icon" href="${favicon}" />
        <link rel="manifest" href="/manifest.webmanifest">
        <script src="./registerSW.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root" style='height:100vh'>${dangerouslySkipEscape(
          pageHtml,
        )}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    // See https://vike.dev/streaming#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
};
