import { FC, HTMLAttributes } from 'react';
import ClickListener from '../ClickListener';
import { BadgeStyle, CloseIcon } from './style';

export const testId = 'Badge/testId';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    value?: string;
}

const Badge: FC<BadgeProps> = ({ value, className, onClick }) => {
    return (
        <BadgeStyle className={className}>
            <>
                {value}
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
