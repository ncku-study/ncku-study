import type { FC } from 'react';

import { Study } from '@/redux/actions/study';
import useModalContext from '@/utils/redux/components/modal/useModalContext';
import CategoryBlock from './CategoryBlock';
import StatisticBlock from './StatisticBlock';
import {
    StudyReaderContent,
    StudyReaderContext,
    StudyReaderLayout,
} from './style';
import Title from './Title';

const StudyReader: FC = (/* { isAdmin } */) => {
    const [context] = useModalContext();
    const {
        // id,
        title,
        // major,
        year,
        content,
        // confirm,
        timestamp,
        categories,
        statistics,
    } = context as unknown as Study;

    return (
        <StudyReaderLayout isAdmin={false}>
            <StudyReaderContext>
                <CategoryBlock
                    // isAdmin={isAdmin}
                    // id={id}
                    categories={categories}
                />
                <Title title={title} year={year} timestamp={timestamp} />
                <StatisticBlock statistics={statistics} />
                <StudyReaderContent>{content}</StudyReaderContent>
            </StudyReaderContext>
        </StudyReaderLayout>
    );
};

export default StudyReader;
