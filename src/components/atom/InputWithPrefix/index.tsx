/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@mui/material/TextField';
import { ChangeEventHandler, FC } from 'react';
import PropsType from '../propsType';

import { InputFieldWithPrefix } from './style';

const InputWithPrefix: FC<PropsType> = ({
    className,
    textProps,
    eventProps,
    otherProps,
}) => {
    const elementAttrs = otherProps?.elementAttrs;
    const onChange =
        eventProps?.onChange as ChangeEventHandler<HTMLInputElement>;
    const prefix = textProps?.prefix;
    const value = textProps?.value;

    const attribute = {
        value,
        className,
        inputProps: elementAttrs,
        InputLabelProps: { shrink: false },
    };

    return (
        <InputFieldWithPrefix>
            {prefix}
            <TextField onChange={onChange} {...attribute} />
        </InputFieldWithPrefix>
    );
};

export default InputWithPrefix;
