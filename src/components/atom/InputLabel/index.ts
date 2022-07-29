import style from '@emotion/styled';
import InputLabel from '@mui/material/InputLabel';
import { color } from '~/src/theme/global';

export default style(InputLabel)`
    &.MuiInputLabel-shrink {
        font-size: 2.2rem;
    }

    &.Mui-focused {
        color: ${color.darkYellow};
    }
`;
