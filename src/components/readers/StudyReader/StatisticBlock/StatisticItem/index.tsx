import type { FC } from 'react';

import { Statistic } from '@/redux/actions/study';
import { StatisticItemContainer, StatisticName, StatisticValue } from './style';

interface StatisticItemProps {
    data: Statistic;
}
const StatisticItem: FC<StatisticItemProps> = ({ data }) => {
    return (
        <StatisticItemContainer>
            <StatisticName>{data.name}</StatisticName>
            <StatisticValue>{data.value}</StatisticValue>
        </StatisticItemContainer>
    );
};

export default StatisticItem;
