import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface GlobalLayoutContextInterface {
    isLoggedIn: boolean;
    setLoginStatus: undefined | ((value: boolean) => void);
}
export const GlobalLayoutContext = createContext<GlobalLayoutContextInterface>({
    isLoggedIn: false,
    setLoginStatus: undefined,
});

export const GlobalLayoutContextProvider = ({
    children,
}: PropsWithChildren) => {
    const [isLoggedIn, setLoginStatus] = useState(false);
    const value = useMemo(() => ({ isLoggedIn, setLoginStatus }), [isLoggedIn]);

    return (
        <GlobalLayoutContext.Provider value={value}>
            {children}
        </GlobalLayoutContext.Provider>
    );
};
