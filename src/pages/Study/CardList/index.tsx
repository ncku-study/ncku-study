import { FC, useState } from 'react';

import InfiniteScroll, { ListItemComponent } from '@/components/InfiniteScroll';
import { ScrollableContainer } from './style';
import useFetchData from './useFetchData';

const row: FC<ListItemComponent> = ({ index, data }) => {
    return <div style={{ height: 150 }}>{data[index]?.id}</div>;
};

const CardList: FC = () => {
    const studyData: Array<unknown> = [];
    const [overscanStopIndex, setOverscanStopIndex] = useState(0);
    useFetchData(studyData, overscanStopIndex);

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
