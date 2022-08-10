import { FC } from 'react';
import ClickListener from '../ClickListener';
import PropsType from '../propsType';
import { BadgeStyle, CloseIcon } from './style';

const Badge: FC<PropsType> = ({ styleProps, textProps, eventProps }) => {
    const className = styleProps?.className;
    const value = textProps?.value;
    const onClose = eventProps?.onClose;
    return (
        <BadgeStyle className={className}>
            <>
                {value}
                {onClose && (
                    <ClickListener>
                        <CloseIcon />
                    </ClickListener>
                )}
            </>
        </BadgeStyle>
    );
};

export default Badge;
