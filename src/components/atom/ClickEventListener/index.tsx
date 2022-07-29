import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import { EventProps } from '../propsType';

const ClickListener: NextPage<PropsWithChildren<EventProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ClickListener;
