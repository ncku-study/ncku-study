import TextField from '@mui/material/TextField';
import { NextPage } from 'next';
import PropsType from '../propsType';

import { InputFieldWithPrefix } from './style';

const InputWithPrefix: NextPage<PropsType> = ({
  styleProps,
  textProps,
  eventProps,
  otherProps,
}) => {
  const { className } = styleProps;
  const { elementAttrs } = otherProps;
  const { onChange } = eventProps;
  const { prefix, value } = textProps;
  return (
    <InputFieldWithPrefix>
      {prefix}
      <TextField
        value={value}
        className={className}
        inputProps={elementAttrs}
        InputLabelProps={{ shrink: false }}
        onChange={onChange}
      />
    </InputFieldWithPrefix>
  );
};

export default InputWithPrefix;
