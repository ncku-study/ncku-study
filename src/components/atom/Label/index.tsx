import { NextPage } from 'next';
import ClickEventListener from '../ClickEventListener';
import PropsType from '../propsType';
import { DeleteButton, Title } from './style';

const Label: NextPage<PropsType> = ({ styleProps, textProps, eventProps }) => {
  const { value } = textProps;
  const { enableDelete, onDelete } = eventProps;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Title {...styleProps}>
      {value}{' '}
      {enableDelete && (
        <ClickEventListener onClick={onDelete}>
          <DeleteButton />
        </ClickEventListener>
      )}
    </Title>
  );
};

export default Label;
