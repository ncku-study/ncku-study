import TextField from '@mui/material/TextField';
import { NextPage } from 'next';
import ChangeListener from '../ChangeListener';
import PropsType, {
  EventProps,
  OtherProps,
  StyleProps,
  TextProps,
} from '../propsType';

import { InputFieldWithPrefix } from './style';

const InputWithPrefix: NextPage<PropsType> = ({
  styleProps,
  textProps,
  eventProps,
  otherProps,
}) => {
  const { className } = styleProps as StyleProps;
  const { elementAttrs } = otherProps as OtherProps;
  const { onChange } = eventProps as EventProps;
  const { prefix, value } = textProps as TextProps;

  const attribute = {
    value,
    className,
    inputProps: elementAttrs,
    InputLabelProps: { shrink: false },
  };

  return (
    <InputFieldWithPrefix>
      {prefix}
      <ChangeListener
        Children={TextField}
        attribute={attribute}
        onChange={onChange}
      />
    </InputFieldWithPrefix>
  );
};

export default InputWithPrefix;
