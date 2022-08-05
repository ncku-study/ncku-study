import { withIronSessionSsr } from 'iron-session/next';
import { NextPage } from 'next';

import type { LoginProps } from '@/pages/Login';
import LoginPage from '@/pages/Login';
import sessionOptions from '~/lib/session';
import type { Session } from '../api/user';

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const { user } = req.session;

    if (!user?.isLoggedIn)
        return {
            props: {
                user: {
                    username: '',
                    isLoggedIn: false,
                    mode: 'admin',
                } as Session,
            },
        };

    return { props: { user } };
}, sessionOptions);

const Login: NextPage<LoginProps> = ({ user }) => {
    return <LoginPage user={user} />;
};

export default Login;
