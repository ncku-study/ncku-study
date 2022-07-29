import { NextPage } from 'next';
import ChangeListener from '../ChangeListener';
import PropsType, { EventProps, OtherProps, TextProps } from '../propsType';
import TextField, { useStyles } from './style';

const Input: NextPage<PropsType> = ({ textProps, eventProps, otherProps }) => {
  const classes = useStyles();

  const { value, wording } = textProps as TextProps;
  const { onChange } = eventProps as EventProps;
  const { elementAttrs } = otherProps as OtherProps;

  const attribute = {
    value,
    inputProps: { ...elementAttrs, className: classes.input },
    label: wording,
    InputLabelProps: { className: classes.labelText, shrink: true },
  };
  return (
    <ChangeListener
      Children={TextField}
      attribute={attribute}
      onChange={onChange}
    />
  );
};

export default Input;
