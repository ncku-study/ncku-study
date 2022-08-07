import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import sessionOptions from '~/lib/session';
import { Mode, Session } from './user';

function route(req: NextApiRequest, res: NextApiResponse<Session>) {
    req.session.destroy();
    res.json({ username: '', isLoggedIn: false, mode: Mode.admin });
}

export default withIronSessionApiRoute(route, sessionOptions);
