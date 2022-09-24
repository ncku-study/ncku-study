import { FC, useState } from 'react';

import InfiniteScroll, { ListItemComponent } from '@/components/InfiniteScroll';
import { useAppSelector } from '@/redux/hooks';
import { studyDataSelector } from '@/redux/selectors/study';
import { ScrollableContainer } from './style';
import useFetchData from './useFetchData';

const row: FC<ListItemComponent> = ({ index /* , data  */, style }) => {
    return <div style={style}>{index}</div>;
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
