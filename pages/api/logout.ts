import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import sessionOptions, { Mode, User } from '~/lib/session';

function route(req: NextApiRequest, res: NextApiResponse<User>) {
    req.session.destroy();
    res.json({ username: '', isLoggedIn: false, mode: Mode.admin });
}

export default withIronSessionApiRoute(route, sessionOptions);
