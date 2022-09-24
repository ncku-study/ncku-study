import { CSSProperties, FC, useCallback, useRef } from 'react';

import { useParentSize } from '~/src/utils/index';
import { ListContainer } from './style';

export interface ListItemComponent {
    index: number;
    key: never;
    type: never;
    props: never;
    data: Array<unknown>;
    style: CSSProperties;
}

interface InfiniteScrollProps {
    data: Array<unknown>;
    setOverscanStopIndex: (stopIndex: number) => void;
    listItemComponent: FC<ListItemComponent>;
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
                itemSize={250}
                width={parentWidth - 10}
                onItemsRendered={handleItemsRendered}
                itemData={data}
            >
                {listItemComponent as never}
            </ListContainer>
        </div>
    );
};

export default InfiniteScroll;
