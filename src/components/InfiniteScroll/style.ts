/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import { FixedSizeList } from 'react-window';

import { Study } from '@/redux/actions/study';
import { ScrollBarStyle } from '~/src/theme/global';

export const ListContainer = styled(FixedSizeList<Array<Study>>)({
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
