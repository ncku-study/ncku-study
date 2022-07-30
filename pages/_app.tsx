/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import type { FC } from 'react';

import '~/styles/global.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
