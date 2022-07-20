import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

async function route(req: NextApiRequest, res: NextApiResponse) {
  const { username } = await req.body;

  if (username !== 'sth') {
    res.statusCode = 403;
    res.json({ status: 'unauthorized' });
    return;
  }

  res.statusCode = 200;
  res.json({ status: 'authorized' });
}

export default withIronSessionApiRoute(route, sessionOptions);
