import { withIronSessionSsr } from 'iron-session/next';
import { NextPage } from 'next';

import sessionOptions from '~/lib/session';

export const getServerSideProps = withIronSessionSsr(async ({ req, res }) => {
    const { user } = req.session;

    if (!user?.isLoggedIn) {
        res.setHeader('location', '/admin/login');
        res.statusCode = 302;
        res.end();
    }
    return { props: {} };
}, sessionOptions);

const Index: NextPage = () => {
    return <div />;
};

export default Index;
