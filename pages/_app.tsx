import React from 'react';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

if (process.env.NODE_ENV === 'development') {
  import('mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.queryClient}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
