import { Category, Statistic, Study } from 'database/models';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

async function route(req: NextApiRequest, res: NextApiResponse) {
  if (req.session.user === 'sth') {
    const {
      query: { from, num, cate, stat },
      method,
      body,
    } = req;

    const studies = await Study.findAll({
      include: [
        {
          model: Category,
          required: !!cate,
          ...(typeof cate === 'string' && { where: { id: cate.split(',') } }),
        },
        {
          model: Statistic,
          required: !!stat,
          ...(typeof stat === 'string' && { where: { id: stat.split(',') } }),
        },
      ],
    });

    res.statusCode = 200;
    res.send(studies);
  } else {
    req.session.user = 'sth';
    await req.session.save();
    res.json({});
  }
}

export default withIronSessionApiRoute(route, sessionOptions);
