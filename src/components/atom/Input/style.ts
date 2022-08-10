import styled from '@emotion/styled';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { createStyles, makeStyles } from '@mui/styles';
import { color } from '~/src/theme/global';

export default styled(TextField)<TextFieldProps>`
    width: 100%;
    height: 60px;
`;

export const useStyles = makeStyles(() =>
    createStyles({
        labelText: {
            '&.Mui-focused': {
                color: color.darkYellow,
            },
            '&.MuiInputLabel-shrink': {
                fontSize: '2.2rem',
            },
        },
        root: {
            height: '40px',
        },
        input: {
            fontSize: '1.7rem',
        },
    })
);
