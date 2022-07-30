import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { Category, Statistic, Study } from '@/db/models';
import sessionOptions from '~/lib/session';

async function route(req: NextApiRequest, res: NextApiResponse) {
    if (req.session.user === 'sth') {
        const {
            query: { cate, stat },
        } = req;

        const studies = await Study.findAll({
            include: [
                {
                    model: Category,
                    required: !!cate,
                    ...(typeof cate === 'string' && {
                        where: { id: cate.split(',') },
                    }),
                },
                {
                    model: Statistic,
                    required: !!stat,
                    ...(typeof stat === 'string' && {
                        where: { id: stat.split(',') },
                    }),
                },
            ],
        });

        res.statusCode = 200;
        res.send(
            studies.map((study) => {
                return {
                    id: study.id,
                    title: study.title,
                    major: study.major,
                    year: study.year,
                    confirm: study.confirm,
                    content: study.content,
                    category: study.categories.map((category) => {
                        return {
                            id: category.id,
                            name: category.name,
                        };
                    }),
                    statistic: study.statistics.map((statistic) => {
                        return {
                            id: statistic.id,
                            name: statistic.name,
                            type: statistic.type,
                            value: statistic.StudyStatistic.value,
                        };
                    }),
                };
            })
        );
    } else {
        res.statusCode = 403;
        res.json({ status: 'unauthorized' });
    }
}

export default withIronSessionApiRoute(route, sessionOptions);
