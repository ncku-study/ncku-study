import { FC, PropsWithChildren } from 'react';
import { EventProps, MouseEventHandle } from '../propsType';

const ClickListener: FC<PropsWithChildren<EventProps>> = ({
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
