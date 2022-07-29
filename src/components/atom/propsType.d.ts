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
  onClick?: MouseEventHandler<HTMLButtonElement> | unknown;
  onClose?: MouseEventHandler<HTMLButtonElement> | unknown;
  onChange?: KeyboardEventHandler<HTMLInputElement> | unknown;
  onDelete?: MouseEventHandler<HTMLButtonElement> | unknown;

  enableDelete?: boolean;
};

export type TextProps = {
  value?: string;
  wording?: string;
  subWording?: string[] | string;
  prefix?: string;
};

export type OtherProps = {
  elementAttrs?: object;
  objValue?: unknown;
};

interface PropsType {
  styleProps?: StyleProps;
  eventProps?: EventProps;
  textProps?: TextProps;
  otherProps?: OtherProps;
}

export default PropsType;