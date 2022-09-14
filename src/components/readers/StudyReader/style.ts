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
