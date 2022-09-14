import type { FC } from 'react';
import { Circle, Ripple, Scope } from './style';

const Icon: FC = () => {
    return (
        <Scope>
            <Ripple>
                <Circle />
                <Circle />
            </Ripple>
        </Scope>
    );
};

export default Icon;
