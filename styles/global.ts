import { css } from '@emotion/react';
import { createTheme } from '@mui/material';

export const color = {
    yellow: '#feda6a',
    backgroundYellow: '#feda6a66',
    lightYellow: '#ffeead',
    darkYellow: '#e1af13',
    white: '#ffffff',
    darkWhite: '#f8f8f8',
    lightGray: '#d4d4dc',
    darkGray: '#a39e9e',
    lightBlack: '#393f4d',
    darkBlack: '#1d1e22',
    red: '#f5587b',
};

export const globalTheme = createTheme({
    palette: {
        primary: {
            main: color.yellow,
        },
    },
});

export const globalStyle = css`
    html {
        font-size: 10px;
    }

    body {
        margin: 0;
        font-family: 'Noto Sans TC', 'Microsoft JhengHei';
        color: ${color.darkBlack};
        font-size: 15px;
        line-height: 1.42857143;
        overflow-y: hidden;
    }

    textarea::-webkit-scrollbar,
    section::-webkit-scrollbar {
        width: 1px;
        height: 1px;
        background-color: transparent;
        border: none;
    }

    textarea::-webkit-scrollbar-thumb,
    section::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${color.yellow};
        opacity: 0.5;
    }

    textarea::-webkit-scrollbar-track,
    section::-webkit-scrollbar-track {
        background-color: transparent;
        border: 0px solid;
    }

    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }
`;
