import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import sessionOptions from '~/lib/session';

export type Mode = 'normal' | 'admin';

export type Session = {
    username: string;
    isLoggedIn: boolean;
    mode: Mode;
};

function route(req: NextApiRequest, res: NextApiResponse<Session>) {
    const { user } = req.session;

    if (!user?.isLoggedIn) {
        res.status(401).json({
            username: '',
            isLoggedIn: false,
            mode: 'normal',
        });
        return;
    }

    res.json({ ...user });
}

export default withIronSessionApiRoute(route, sessionOptions);
