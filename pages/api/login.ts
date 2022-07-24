import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

async function route(req: NextApiRequest, res: NextApiResponse) {
  const { username } = await req.body;

  req.session.user = username;
  await req.session.save();

  res.statusCode = 200;
  res.send({ status: 'succeeded' });
}

export default withIronSessionApiRoute(route, sessionOptions);
