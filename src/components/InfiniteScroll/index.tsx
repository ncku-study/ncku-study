import { ComponentType, FC, useCallback, useRef } from 'react';
import { ListChildComponentProps } from 'react-window';

import { Study } from '@/redux/actions/study';
import { useParentSize } from '@/utils/index';
import { ListContainer } from './style';

interface InfiniteScrollProps {
    data: Array<Study>;
    setOverscanStopIndex: (stopIndex: number) => void;
    listItemComponent: ComponentType<ListChildComponentProps<Array<Study>>>;
}
const InfiniteScroll: FC<InfiniteScrollProps> = ({
    data,
    setOverscanStopIndex,
    listItemComponent,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { parentWidth, parentHeight } = useParentSize(containerRef);

    const handleItemsRendered = useCallback(
        ({ overscanStopIndex }: { overscanStopIndex: number }) => {
            setOverscanStopIndex(overscanStopIndex);
        },
        [setOverscanStopIndex]
    );

    return (
        <div ref={containerRef}>
            <ListContainer
                height={parentHeight}
                itemCount={data.length}
                itemSize={160}
                width={parentWidth - 10}
                onItemsRendered={handleItemsRendered}
                itemData={data}
            >
                {listItemComponent}
            </ListContainer>
        </div>
    );
};

export default InfiniteScroll;
