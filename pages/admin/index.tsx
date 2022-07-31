import { withIronSessionSsr } from 'iron-session/next';
import { InferGetServerSidePropsType } from 'next';

import GlobalLayout from '@/components/GlobalLayout';
import sessionOptions from '~/lib/session';
import type { Session } from '../api/user';

export const getServerSideProps = withIronSessionSsr(async function ({
    req,
    res,
}) {
    const { user } = req.session;

    if (!user?.isLoggedIn) {
        res.setHeader('location', '/admin/login');
        res.statusCode = 302;
        res.end();
        return {
            props: {
                user: {
                    username: '',
                    isLoggedIn: false,
                } as Session,
            },
        };
    }

    return {
        props: { user },
    };
},
sessionOptions);

const Index = ({
    user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <GlobalLayout isLoggedIn={!!user?.isLoggedIn} />;
};

export default Index;
