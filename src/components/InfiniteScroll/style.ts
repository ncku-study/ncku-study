/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import { FixedSizeList } from 'react-window';

import { ScrollBarStyle } from '~/src/theme/global';

export const ListContainer = styled(FixedSizeList)({
    overflowX: 'hidden',

    '@media (max-width: 576px)': {
        display: 'block',
        margin: '0px 10px',
    },
    '@media (min-width: 576px)': {
        overflowY: 'auto',
        ...ScrollBarStyle,
    },
});
