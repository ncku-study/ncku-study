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
