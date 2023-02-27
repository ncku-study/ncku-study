import styled from '@emotion/styled';
import NavigateBefore from '@mui/icons-material/NavigateBefore';

import { color } from '~/styles/global';

interface StudyReaderLayoutProps {
    isAdmin: boolean;
}

export const StudyReaderLayout = styled('div')<StudyReaderLayoutProps>(
    ({ isAdmin }) => ({
        display: 'grid',
        gridTemplateColumns: '50px auto 50px',
        gridTemplateRows: isAdmin ? '30px calc(100% - 30px)' : '100%',
        width: '600px',
        height: '90vh',
        backgroundColor: color.white,

        '@media (max-width: 992px)': {
            width: '360px',
            height: '85vh',
            minWidth: '95vw',
        },
    })
);

export const ArrowIcon = styled(NavigateBefore)(({ direction }) => ({
    transform: direction === 'left' ? 'none' : 'rotate(180deg)',
}));

export const StudyReaderContext = styled('div')({
    padding: '25px 0px',

    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    gridColumnStart: 2,
});

export const StudyReaderContent = styled('div')({
    height: '100%',
    margin: '5px 0px',

    overflowY: 'auto',
    textAlign: 'justify',
    letterSpacing: '2.5px',
    lineHeight: '2.8rem',
    lineBreak: 'anywhere',
    whiteSpace: 'pre-line',

    '::-webkit-scrollbar': {
        width: '1px',
        height: '1px',

        border: 'none',
        backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: '#555',
        opacity: 0.5,
    },
    '::-webkit-scrollbar-track': {
        border: '0px solid',
        backgroundColor: 'transparent',
    },
});
