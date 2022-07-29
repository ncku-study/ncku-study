import { NextPage } from 'next';
import { EventProps, KeyboardEventHandle } from '../propsType';

interface CEventProps extends EventProps {
  Children: unknown;
  attribute: object;
}

const ChangeListener: NextPage<CEventProps> = ({ attribute, ...props }) => {
  const onChange = props.onChange as KeyboardEventHandle;
  const Children = props.Children as NextPage<EventProps>;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Children onChange={onChange} {...attribute} />;
};

export default ChangeListener;
