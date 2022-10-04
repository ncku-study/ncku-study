/* eslint-disable react/jsx-props-no-spreading */
import TextField, { StandardTextFieldProps } from '@mui/material/TextField';
import { FC } from 'react';

import { InputFieldWithPrefix } from './style';

export interface InputWithPrefixProps extends StandardTextFieldProps {
    elementAttrs?: object;
    prefix?: string;
    value?: string;
}

const InputWithPrefix: FC<InputWithPrefixProps> = ({
    className,
    elementAttrs,
    prefix,
    value,
    onChange,
}) => {
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
