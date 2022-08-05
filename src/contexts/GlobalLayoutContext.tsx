import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { Mode, Session } from '~/pages/api/user';

interface GlobalLayoutContextInterface {
    isLoggedIn: boolean;
    setLoginStatus?: (value: boolean) => void;
    mode: Mode;
    setMode?: (mode: Mode) => void;
}
export const GlobalLayoutContext = createContext<GlobalLayoutContextInterface>({
    isLoggedIn: false,
    setLoginStatus: undefined,
    mode: 'normal',
    setMode: undefined,
});

interface GlobalLayoutContextProviderInterface extends PropsWithChildren {
    user: Session;
}

export const GlobalLayoutContextProvider = ({
    user,
    children,
}: GlobalLayoutContextProviderInterface) => {
    const [isLoggedIn, setLoginStatus] = useState(user.isLoggedIn);
    const [mode, setMode] = useState(user.mode);
    const value = useMemo(
        () => ({ isLoggedIn, setLoginStatus, mode, setMode }),
        [mode, isLoggedIn]
    );

    return (
        <GlobalLayoutContext.Provider value={value}>
            {children}
        </GlobalLayoutContext.Provider>
    );
};
