import type { FC } from 'react';

import { Statistic } from '@/redux/actions/study';
import StatisticItem from './StatisticItem';
import { StatisticContainer } from './style';

interface StatisticBlockProps {
    statistics: Array<Statistic>;
}

const StatisticBlock: FC<StatisticBlockProps> = ({ statistics }) => {
    return (
        <StatisticContainer>
            {statistics.map((stat) => (
                <StatisticItem key={stat.id} data={stat} />
            ))}
        </StatisticContainer>
    );
};

export default StatisticBlock;
