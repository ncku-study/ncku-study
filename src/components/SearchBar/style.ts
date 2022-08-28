import styled from '@emotion/styled';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';

import { color } from '~/src/theme/global';

export const Container = styled('form')({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
});

export const InputField = styled('input')({
    width: '550px',
    height: '45px',
    padding: '10px 15px',

    boxSizing: 'border-box',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '55px',

    ':focus-visible': {
        outline: '1px solid rgba(0,0,0,0.5)',
    },

    '@media (max-width: 576px)': {
        width: '182px',
        height: '35px',
    },
});

export const Button = styled('button')({
    padding: 0,

    position: 'absolute',
    right: '12px',
    border: 0,
    cursor: 'pointer',
    backgroundColor: color.white,
});

export const StyledSearchIcon = styled(SearchIcon)({
    color: color.yellow,
});

export const StyledClearIcon = styled(CancelIcon)({
    color: color.red,
});
