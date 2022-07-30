import { FC } from 'react';
import ClickEventListener from '../ClickListener';
import PropsType, { EventProps, StyleProps, TextProps } from '../propsType';
import { BadgeStyle, CloseIcon } from './style';

const Badge: FC<PropsType> = ({ styleProps, textProps, eventProps }) => {
    const { className } = styleProps as StyleProps;
    const { value } = textProps as TextProps;
    const { onClose } = eventProps as EventProps;
    return (
        <BadgeStyle className={className}>
            <>
                {value}
                {onClose && (
                    <ClickEventListener>
                        <CloseIcon />
                    </ClickEventListener>
                )}
            </>
        </BadgeStyle>
    );
};

export default Badge;
