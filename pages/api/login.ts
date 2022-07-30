import { User } from '@db/models';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import sessionOptions from '~/lib/session';

export type Session = {
    username: string;
    isLogined: boolean;
};

async function route(req: NextApiRequest, res: NextApiResponse) {
    const { account, password } = await req.body;

    const user = await User.findByPk(account);

    if (user?.password !== password) {
        res.statusCode = 403;
        res.json({ status: 'fail' });
        return;
    }

    const session = { username: account, isLogined: true } as Session;
    req.session.user = session;
    await req.session.save();

    res.statusCode = 200;
    res.send({ status: 'success' });
}

export default withIronSessionApiRoute(route, sessionOptions);
