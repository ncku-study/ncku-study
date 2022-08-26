import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import sessionOptions, { Mode, User } from '~/lib/session';

function route(req: NextApiRequest, res: NextApiResponse<User>) {
    const { user } = req.session;

    if (!user?.isLoggedIn) {
        res.status(401).json({
            username: '',
            isLoggedIn: false,
            mode: Mode.normal,
        });
        return;
    }

    res.json({ ...user });
}

export default withIronSessionApiRoute(route, sessionOptions);
