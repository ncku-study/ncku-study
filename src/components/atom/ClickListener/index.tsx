import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const ClickListener: FC<
    PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
> = ({ children, onClick }) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default ClickListener;
