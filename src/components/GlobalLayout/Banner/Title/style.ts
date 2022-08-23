import styled from '@emotion/styled';

import SearchBar, { SearchBarProps } from '@/components/SearchBar';

export const H1 = styled('h1')({
    width: '100%',
    margin: 0,

    fontSize: '1.7rem',
    fontWeight: 500,

    '@media (max-width: 992px)': {
        width: 'auto',
        paddingLeft: '20px',

        alignItems: 'center',
    },
});

export const H2 = styled('h2')({
    width: '100%',
    margin: 0,

    fontSize: '2.2rem',
    fontWeight: 600,

    '@media (max-width: 992px)': {
        width: 'auto',
        paddingLeft: '20px',

        alignItems: 'center',
    },
});

export const StyledSearchBar = styled(SearchBar)<SearchBarProps>({
    width: '550px',
    height: '45px',
    display: 'flex',

    '@media (max-width: 992px)': {
        width: '50px',
        height: '35px',
        paddingLeft: '25px',

        flexGrow: 1,
    },
    '@media (max-width: 576px)': {
        width: '30%',
        height: '35px',
        paddingLeft: '25px',
    },
});

export const Header = styled('header')({
    width: '100%',
    display: 'flex',

    flexWrap: 'wrap',
    alignItems: 'center',
});
