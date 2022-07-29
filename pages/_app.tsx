/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { FC } from 'react';

import GlobalLayout from '@/components/GlobalLayout';
import '@/styles/global.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <GlobalLayout>
            <Component {...pageProps} />
        </GlobalLayout>
    );
};

export default MyApp;
