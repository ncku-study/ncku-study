import { FC, HTMLAttributes, MouseEventHandler } from 'react';
import ClickListener from '../ClickListener';
import { DeleteButton, Title } from './style';

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    value?: string;
    styleProps?: object;
    enableDelete?: boolean;
    onDelete?: MouseEventHandler<HTMLButtonElement>;
}

const Label: FC<LabelProps> = ({
    value,
    styleProps,
    enableDelete,
    onDelete,
}) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Title {...styleProps}>
            {value}{' '}
            {enableDelete && (
                <ClickListener onClick={onDelete}>
                    <DeleteButton />
                </ClickListener>
            )}
        </Title>
    );
};

export default Label;
