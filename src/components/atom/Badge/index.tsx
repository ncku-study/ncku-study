import { FC } from 'react';
import ClickListener from '../ClickListener';
import PropsType from '../propsType';
import { BadgeStyle, CloseIcon } from './style';

export const testId = 'Badge/testId';

const Badge: FC<PropsType> = ({ styleProps, textProps, eventProps }) => {
    const className = styleProps?.className;
    const value = textProps?.value;
    const onClick = eventProps?.onClick;
    return (
        <BadgeStyle data-testid={testId} className={className}>
            <>
                <span>{value}</span>
                {onClick && (
                    <ClickListener onClick={onClick}>
                        <CloseIcon />
                    </ClickListener>
                )}
            </>
        </BadgeStyle>
    );
};

export default Badge;
