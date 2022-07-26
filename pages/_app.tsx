/* eslint-disable react/jsx-props-no-spreading */
import { getIronSession } from 'iron-session';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import { useRef } from 'react';
import { Provider } from 'react-redux';

import GlobalLayout from '@/components/GlobalLayout';
import { genStore } from '@/redux/store';
import { Global } from '@emotion/react';
import sessionOptions, { Mode, User } from '~/lib/session';
import { NavSearchProvider } from '~/src/components/GlobalLayout/NavSearchBarContext';
import { globalStyle } from '~/styles/global';

interface MyAppProps extends AppProps {
    user?: User;
}

const MyApp = ({
    Component,
    pageProps,
    user = { username: 'anonymous', isLoggedIn: false, mode: Mode.normal },
}: MyAppProps) => {
    const store = useRef(
        genStore({
            layout: {
                user,
            },
        })
    );

    return (
        <>
            <Global styles={globalStyle} />
            <Provider store={store.current}>
                <NavSearchProvider>
                    <GlobalLayout>
                        <Component {...pageProps} />
                    </GlobalLayout>
                </NavSearchProvider>
            </Provider>
        </>
    );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    if (appContext.ctx.req && appContext.ctx.res) {
        const { user } = await getIronSession(
            appContext.ctx.req,
            appContext.ctx.res,
            sessionOptions
        );

        return {
            ...appProps,
            user,
        };
    }

    // here as server-side's already given a valid user, client side should handle the case when navigating
    return appProps;
};

export default MyApp;
