/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import { ScrollBarStyle } from '~/src/theme/global';

export const ScrollableContainer = styled('section')({
    gridColumn: '1/2',
    gridRow: '2/3',

    '@media (max-width: 576px)': {
        overflowY: 'auto',
        ...ScrollBarStyle,
    },
});
