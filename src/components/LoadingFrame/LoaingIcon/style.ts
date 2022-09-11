import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Scope = styled('div')({
    top: '20vw',

    display: 'flex',
    justifyContent: 'center',

    '@media (min-width: 576px)': {
        marginTop: '10vw',
    },
});

export const Ripple = styled('div')({
    width: '200px',
    height: '200px',

    position: 'relative',
});

const frames = keyframes({
    '0%': {
        top: '96px',
        left: '96px',
        width: 0,
        height: 0,
        opacity: 1,
    },
    '100%': {
        top: '18px',
        left: '18px',
        width: '156px',
        height: '156px',
        opacity: 0,
    },
});

export const Circle = styled('div')({
    boxSizing: 'content-box',
    position: 'absolute',
    borderWidth: '4px',
    borderStyle: 'solid',
    opacity: 1,
    borderRadius: '50%',
    animation: `${frames} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`,

    ':nth-of-type(1)': {
        borderColor: '#e1af13',
    },
    ':nth-of-type(2)': {
        borderColor: '#e1af13',
        animationDelay: '-0.5s',
    },
});
