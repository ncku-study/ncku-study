/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const Container = styled('div')({
    display: 'grid',
    gridTemplateColumns: '600px auto',
    gridTemplateRows: '50px auto',

    overflowY: 'hidden',

    '@media (max-width: 576px)': {
        margin: '0px -10px',
        gridTemplateColumns: '100vw',
    },
});
