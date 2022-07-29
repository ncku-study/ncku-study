import { KeyboardEventHandler, MouseEventHandler } from 'react';

export type StyleProps = {
  className?: string;
  height?: string;
  width?: string;
  display?: string;
  size?: string;
  align?: string;
  theme?: string;
  color?: string;
};

export type EventProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  onChange?: KeyboardEventHandler<HTMLInputElement>;
  onDelete?: MouseEventHandler<HTMLButtonElement>;

  enableDelete?: boolean;
};

export type TextProps = {
  value?: string;
  wording?: string;
  prefix?: string;
};

export type OtherProps = {
  elementAttrs?: object;
};

type PropsType = {
  styleProps: StyleProps;
  eventProps: EventProps;
  textProps: TextProps;
  otherProps: OtherProps;
};

export default PropsType;
