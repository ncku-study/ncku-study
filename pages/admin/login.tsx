import type { FC } from 'react';

import GlobalLayout from '@/components/GlobalLayout';
import LoginPage from '@/pages/Login';
import useUser from '~/lib/useUser';

const Login: FC<unknown> = () => {
    const { user } = useUser();

    return (
        <GlobalLayout isLoggedIn={!!user?.isLoggedIn}>
            <LoginPage />
        </GlobalLayout>
    );
};

export default Login;
