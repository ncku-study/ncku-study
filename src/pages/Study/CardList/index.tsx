import { FC, useState } from 'react';

import StudyCard from '@/components/cards/StudyCard';
import InfiniteScroll from '@/components/InfiniteScroll';
import { useAppSelector } from '@/redux/hooks';
import { studyDataSelector } from '@/redux/selectors/study';
import { ScrollableContainer } from './style';
import useFetchData from './useFetchData';

const CardList: FC = () => {
    const studyData = useAppSelector(studyDataSelector);
    const [overscanStopIndex, setOverscanStopIndex] = useState(0);

    useFetchData(overscanStopIndex);

    return (
        <ScrollableContainer>
            <InfiniteScroll
                data={studyData}
                setOverscanStopIndex={setOverscanStopIndex}
                listItemComponent={StudyCard}
            />
        </ScrollableContainer>
    );
};

export default CardList;
