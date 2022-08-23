/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

import { color } from '~/styles/global';

interface ContainterProps {
    isShowSearch: boolean;
}

export const Container = styled('div')((props: ContainterProps) => ({
    width: '100%',
    height: '100vh',
    padding: '20px 30px',
    boxSizing: 'border-box',

    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: `${props.isShowSearch ? '120px' : '50px'} auto`,

    backgroundColor: color.white,
    overflowY: 'auto',

    '@media (max-width: 992px)': {
        gridTemplateRows: '50px auto',
    },
    '@media (max-width: 576px)': {
        padding: '10px 10px',
        paddingBottom: 0,
    },
    '::-webkit-scrollbar': {
        width: '1px',
        height: '1px',
        backgroundColor: 'transparent',
        border: '0px solid',
    },
    '::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: '#050505',
        opacity: 0.5,
    },
    '::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
        border: '0px solid',
    },
}));
