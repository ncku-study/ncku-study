/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';

import GlobalLayout from '@components/GlobalLayout';
import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
