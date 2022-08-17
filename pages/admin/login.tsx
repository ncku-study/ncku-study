import { withIronSessionSsr } from 'iron-session/next';
import { NextPage } from 'next';

import type { LoginProps } from '@/pages/Login';
import LoginPage from '@/pages/Login';
import sessionOptions, { Mode, User } from '~/lib/session';

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const { user } = req.session;

    if (!user?.isLoggedIn)
        return {
            props: {
                user: {
                    username: '',
                    isLoggedIn: false,
                    mode: Mode.admin,
                } as User,
            },
        };

    return { props: { user } };
}, sessionOptions);

const Login: NextPage<LoginProps> = ({ user }) => {
    return <LoginPage user={user} />;
};

export default Login;
