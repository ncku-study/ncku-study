import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { Op } from 'sequelize';

import { Category, Statistic, Study } from '@/db/models';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
    const {
        query: { from, cate, stat, num },
    } = req;

    const starter = await Study.findByPk(from as string);

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
                where: { confirm: 1 },
                ...(typeof stat === 'string' && {
                    where: { id: stat.split(',') },
                }),
            },
        ],
        ...(starter && {
            where: {
                createdAt: {
                    [Op.lt]: starter.createdAt,
                },
            },
        }),
        ...(num && { limit: Number(num) }),
        order: [['created_at', 'DESC']],
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
                timestamp: study.createdAt,
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
});

export default router.handler();
