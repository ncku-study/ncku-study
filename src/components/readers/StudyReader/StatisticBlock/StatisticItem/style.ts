import styled from '@emotion/styled';

export const StatisticItemContainer = styled('div')({
    height: '50px',
    minWidth: '75px',
    marginRight: '10px',

    display: 'grid',
    gridTemplateRows: '12px auto',
});
export const StatisticName = styled('div')({
    fontSize: '12px',
});

export const StatisticValue = styled('div')({
    fontSize: '24px',
});
