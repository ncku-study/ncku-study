import { FC, ReactNode } from 'react';

interface GlobalLayoutProps {
    children: null | ReactNode;
}

const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default GlobalLayout;
