import { NextPage } from 'next';
import ClickEventListener from '../ClickEventListener';
import PropsType from '../propsType';
import { BadgeStyle, CloseIcon } from './style';

const Badge: NextPage<PropsType> = ({ styleProps, textProps, eventProps }) => {
  const { className } = styleProps;
  const { value } = textProps;
  const { onClose } = eventProps;
  return (
    <BadgeStyle className={className}>
      {value}
      {onClose && (
        <ClickEventListener>
          <CloseIcon />
        </ClickEventListener>
      )}
    </BadgeStyle>
  );
};

export default Badge;
