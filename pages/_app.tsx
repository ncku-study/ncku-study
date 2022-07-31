/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import type { FC } from 'react';

import GlobalLayout from '~/src/components/GlobalLayout';
import { GlobalLayoutContextProvider } from '~/src/contexts/GlobalLayoutContext';

import '~/styles/global.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <GlobalLayoutContextProvider>
            <GlobalLayout>
                <Component {...pageProps} />
            </GlobalLayout>
        </GlobalLayoutContextProvider>
    );
};

export default MyApp;
