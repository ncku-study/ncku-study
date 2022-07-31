import { User } from '@/db/models';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import sessionOptions from '~/lib/session';
import type { Session } from './user';

async function route(req: NextApiRequest, res: NextApiResponse) {
    const { account, password } = await req.body;

    const user = await User.findByPk(account);

    if (user?.password !== password) {
        res.status(401).json({ username: account });
        return;
    }

    const session = { username: account, isLoggedIn: true } as Session;
    req.session.user = session;
    await req.session.save();

    res.json({ ...session });
}

export default withIronSessionApiRoute(route, sessionOptions);
