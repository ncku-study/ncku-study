import { StandardTextFieldProps } from '@mui/material/TextField';
import { FC } from 'react';
import TextField, { useStyles } from './style';

export interface InputProps extends StandardTextFieldProps {
    elementAttrs?: object;
    value?: string;
    wording?: string;
}

const Input: FC<InputProps> = ({ value, wording, elementAttrs, onChange }) => {
    const classes = useStyles();

    const attribute = {
        value,
        inputProps: { ...elementAttrs, className: classes.input },
        label: wording,
        InputLabelProps: { className: classes.labelText, shrink: true },
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <TextField {...attribute} onChange={onChange} />;
};

export default Input;
