import { FC, useEffect, useReducer } from 'react';
import { ListChildComponentProps } from 'react-window';

import { Study } from '@/redux/actions/study';
import { useWindowWidth } from '@/utils/index';
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

function reducer(state: number, action: { type: 'PC' | 'mobile' }) {
    switch (action.type) {
        case 'PC':
            return 36;
        case 'mobile':
            return 21;
        default:
            return state;
    }
}

const StudyCard: FC<ListChildComponentProps<Array<Study>>> = ({
    index,
    data,
    style,
}) => {
    const itemData = data[index];
    const [wordsNumber, dispatch] = useReducer(reducer, 36);
    const windowWidth = useWindowWidth();
    const handleOpenContent = useOpenContent(itemData, index);

    useEffect(() => {
        if (!windowWidth) return;
        if (windowWidth >= 870 && wordsNumber === 21) {
            dispatch({ type: 'PC' });
        } else if (windowWidth < 870 && wordsNumber === 36) {
            dispatch({ type: 'mobile' });
        }
    }, [windowWidth, wordsNumber]);

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
                    {contentMiddleware(itemData.content, wordsNumber)}
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
