import { FC } from 'react';
import ClickListener from '../ClickListener';
import PropsType, { EventProps, TextProps } from '../propsType';
import { DeleteButton, Title } from './style';

const Label: FC<PropsType> = ({ styleProps, textProps, eventProps }) => {
    const { value } = textProps as TextProps;
    const { enableDelete, onDelete } = eventProps as EventProps;
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
