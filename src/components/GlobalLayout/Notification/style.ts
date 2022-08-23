import styled from '@emotion/styled';
import WarningIcon from '@mui/icons-material/Warning';
import Snackbar from '@mui/material/Snackbar';

import { Button, color } from '~/src/theme/global';

export const YellowSnackbar = styled(Snackbar)({
    '& .MuiSnackbarContent-root': {
        color: color.darkBlack,
        backgroundColor: color.yellow,
    },
});

export const CloseButton = styled(Button)({
    padding: '5px 10px',
    height: '35px',
    borderRadius: '20px',
});

export const WarningIconWhite = styled(WarningIcon)({
    color: color.white,
});
