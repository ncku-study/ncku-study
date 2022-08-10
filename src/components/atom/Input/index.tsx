import { ChangeEventHandler, FC } from 'react';
import PropsType from '../propsType';
import TextField, { useStyles } from './style';

const Input: FC<PropsType> = ({ textProps, eventProps, otherProps }) => {
    const classes = useStyles();

    const value = textProps?.value;
    const wording = textProps?.wording;
    const onChange =
        eventProps?.onChange as ChangeEventHandler<HTMLInputElement>;
    const elementAttrs = otherProps?.elementAttrs;

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
