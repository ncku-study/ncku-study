import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import {
  Study,
  Category,
  Statistic,
  StudyStatistic,
  StudyCategory,
} from 'database/models';
import connection from 'database/models/connection';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
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
        where: { confirm: 1 },
        ...(typeof stat === 'string' && { where: { id: stat.split(',') } }),
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
        timestamp: study.createdAt,
        category: study.Categories.map((cate) => {
          return {
            id: cate.id,
            name: cate.name,
          };
        }),
        statistic: study.Statistics.map((stat) => {
          return {
            id: stat.id,
            name: stat.name,
            type: stat.type,
            value: stat.StudyStatistic.value,
          };
        }),
      };
    })
  );
});

export default router.handler();
