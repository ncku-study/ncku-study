import styled from '@emotion/styled';

import Badge from '@/components/atom/Badge';
import { color } from '~/src/theme/global';

interface CardProps {
    isConfirmed: boolean;
}

export const Card = styled('div')((props: CardProps) => ({
    borderBottom: '1px solid rgba(0,0,0,0,125)',
    borderLeft: 0,

    boxSizing: 'border-box',
    backgroundColor: props.isConfirmed ? color.white : color.lightYellow,

    '@media (max-width: 576px)': {
        width: '100%',
        margin: 0,
        borderRadius: 0,
        height: '145px',
    },
}));

export const BadgeList = styled('div')({
    display: 'inline-flex',
});

export const StatisticBadge = styled(Badge)({
    marginRight: '5px',
});

export const CardTitle = styled('h4')({
    marginTop: '12px',
    marginBottom: '6px',

    fontSize: '18px',
});

export const CardSubTitle = styled('div')({
    color: color.darkGray,
    fontSize: '1.2rem',
});

export const CardText = styled('p')({
    marginTop: 0,
    marginBottom: '1rem',

    textAlign: 'justify',
    lineBreak: 'anywhere',
    fontSize: '14px',

    '@media (max-width: 576px)': {
        fontSize: '1.5rem',
    },
});

export const CardContent = styled('div')({
    width: '100%',
    height: '88px',

    marginTop: '20px',
});

export const TagSpanList = styled('div')({
    marginTop: '10px',

    display: 'flex',
    alignItems: 'center',
});

export const TagSpan = styled('span')({
    marginRight: '15px',

    fontSize: '14px',
    color: color.yellow,
});

export const ShowBtn = styled('button')({
    width: '100%',
    height: '75%',
    top: 0,
    left: 0,

    position: 'absolute',
    border: 'none',
    outline: 'none',
    opacity: 0,
});
