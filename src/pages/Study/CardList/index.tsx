import { FC, useState } from 'react';

import InfiniteScroll, { ListItemComponent } from '@/components/InfiniteScroll';
import { useAppSelector } from '~/src/redux/hooks';
import { studyDataSelector } from '~/src/redux/selectors/study';
import { ScrollableContainer } from './style';
import useFetchData from './useFetchData';

const row: FC<ListItemComponent> = ({ index /* , data  */ }) => {
    return <div style={{ height: 250 }}>{index}</div>;
};

const CardList: FC = () => {
    const studyData = useAppSelector(studyDataSelector);
    const [overscanStopIndex, setOverscanStopIndex] = useState(0);
    useFetchData(overscanStopIndex);

    return (
        <ScrollableContainer>
            <InfiniteScroll
                data={studyData}
                setOverscanStopIndex={setOverscanStopIndex}
                listItemComponent={row}
            />
        </ScrollableContainer>
    );
};

export default CardList;
