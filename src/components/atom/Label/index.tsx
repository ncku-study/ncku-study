import { FC } from 'react';
import ClickListener from '../ClickListener';
import PropsType from '../propsType';
import { DeleteButton, Title } from './style';

const Label: FC<PropsType> = ({ styleProps, textProps, eventProps }) => {
    const value = textProps?.value;
    const enableDelete = eventProps?.enableDelete;
    const onDelete = eventProps?.onDelete;

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
