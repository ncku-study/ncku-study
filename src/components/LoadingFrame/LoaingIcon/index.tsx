import type { CSSProperties, FC } from 'react';

interface IconProps {
    style: CSSProperties;
}

const Icon: FC<IconProps> = ({ style }) => {
    return (
        <div className="lds-css-ng-scope" style={style}>
            <div
                style={{ width: '100%', height: '100%' }}
                className="lds-ripple"
            >
                <div style={{ borderColor: '#e1af13' }} />
                <div style={{ borderColor: '#e1af13' }} />
            </div>
        </div>
    );
};

export default Icon;
