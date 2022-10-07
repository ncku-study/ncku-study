import { FC } from 'react';
import { ListChildComponentProps } from 'react-window';

import { Study } from '@/redux/actions/study';
import { useMedia } from '@/utils/index';
import {
    BadgeList,
    Card,
    CardContent,
    CardText,
    CardTitle,
    ShowBtn,
    StatisticBadge,
    TagSpan,
    TagSpanList,
} from './style';
import useOpenContent from './useOpenContent';

function contentMiddleware(content: string, maxNumber: number) {
    return content.length < maxNumber
        ? content
        : `${content.slice(0, maxNumber - 1)}  (...)`;
}

const StudyCard: FC<ListChildComponentProps<Array<Study>>> = ({
    index,
    data,
    style,
}) => {
    const itemData = data[index];
    const device = useMedia();
    const handleOpenContent = useOpenContent(itemData, index);

    return (
        <Card isConfirmed={itemData.confirm === 1} style={style}>
            <CardContent>
                <BadgeList>
                    {itemData.categories?.map((itemObj) => (
                        <StatisticBadge
                            key={itemObj.name}
                            textProps={{ value: itemObj.name }}
                        />
                    ))}
                </BadgeList>
                <CardTitle>{itemData.title}</CardTitle>
                <CardText>
                    {contentMiddleware(
                        itemData.content,
                        device === 'PC' ? 36 : 21
                    )}
                </CardText>
            </CardContent>
            <TagSpanList>
                <TagSpan>{`#${itemData.year}`}</TagSpan>
                {itemData.statistics?.map((itemObj) => (
                    <TagSpan key={itemObj.name}>{`#${itemObj.name}`}</TagSpan>
                ))}
            </TagSpanList>
            <ShowBtn onClick={handleOpenContent} />
        </Card>
    );
};

export default StudyCard;
