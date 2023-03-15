import type { FC } from 'react';

import { PostYearSpan, StyledTitle } from './style';

function parseTime(timestamp: string): string {
    const res = /\d{4}-\d{2}-\d{2}/.exec(timestamp);
    return res ? res[0] : '';
}

interface TitleProps {
    title: string;
    year: number;
    timestamp: string;
}

const Title: FC<TitleProps> = ({ title, year, timestamp }) => {
    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <PostYearSpan>{`${year} ( 發文時間：${parseTime(
                timestamp
            )} )`}</PostYearSpan>
        </>
    );
};

export default Title;
