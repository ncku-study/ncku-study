import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import { EventProps, MouseEventHandle } from '../propsType';

const ClickListener: NextPage<PropsWithChildren<EventProps>> = ({
  children,
  ...eventProps
}) => {
  const onClick = eventProps.onClick as MouseEventHandle;
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ClickListener;
