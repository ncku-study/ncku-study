/* eslint-disable react/jsx-props-no-spreading */
import { getIronSession } from 'iron-session';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import { Provider } from 'react-redux';

import GlobalLayout from '@/components/GlobalLayout';
import { store } from '@/redux/store';
import sessionOptions from '~/lib/session';
import { GlobalLayoutContextProvider } from '~/src/contexts/GlobalLayoutContext';
import { Mode, Session } from './api/user';

import '~/styles/global.scss';

interface MyAppProps extends AppProps {
    user: Session | undefined;
}

const MyApp = ({
    Component,
    pageProps,
    user = { username: '', isLoggedIn: false, mode: Mode.normal },
}: MyAppProps) => (
    <Provider store={store}>
        <GlobalLayoutContextProvider user={user}>
            <GlobalLayout>
                <Component {...pageProps} />
            </GlobalLayout>
        </GlobalLayoutContextProvider>
    </Provider>
);

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
