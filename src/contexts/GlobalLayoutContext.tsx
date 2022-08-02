import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface GlobalLayoutContextInterface {
    isLoggedIn: boolean;
    setLoginStatus?: (value: boolean) => void;
}
export const GlobalLayoutContext = createContext<GlobalLayoutContextInterface>({
    isLoggedIn: false,
    setLoginStatus: undefined,
});

interface GlobalLayoutContextProviderInterface extends PropsWithChildren {
    isLoggedIn: boolean;
}

export const GlobalLayoutContextProvider = ({
    isLoggedIn: _isLoggedIn,
    children,
}: GlobalLayoutContextProviderInterface) => {
    const [isLoggedIn, setLoginStatus] = useState(_isLoggedIn);
    const value = useMemo(() => ({ isLoggedIn, setLoginStatus }), [isLoggedIn]);

    return (
        <GlobalLayoutContext.Provider value={value}>
            {children}
        </GlobalLayoutContext.Provider>
    );
};
