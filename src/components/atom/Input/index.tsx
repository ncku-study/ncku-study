import { NextPage } from 'next';
import PropsType from '../propsType';
import TextField, { useStyles } from './style';

const Input: NextPage<PropsType> = ({ textProps, eventProps, otherProps }) => {
  const classes = useStyles();

  const { value, wording } = textProps;
  const { onChange } = eventProps;
  const { elementAttrs } = otherProps;
  return (
    <TextField
      value={value}
      inputProps={{ ...elementAttrs, className: classes.input }}
      onChange={onChange}
      label={wording}
      InputLabelProps={{ className: classes.labelText, shrink: true }}
    />
  );
};

export default Input;
