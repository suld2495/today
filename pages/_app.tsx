import React from 'react';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import AuthLayout from 'components/common/layout/AuthLayout';

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    import('mocks/server').then(({ server }) => {
      server.listen();
    });
  } else {
    import('mocks/browser').then(({ worker }) => {
      worker.start();
    });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.queryClient}>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
