import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useState,
} from 'react';

export const NavSearchHandlerContext = createContext(() => undefined);

export const NavSetSearchHandlerContext = createContext<
    Dispatch<SetStateAction<() => undefined>>
>(() => undefined);

export const NavSearchProvider = ({ children }: PropsWithChildren) => {
    const [searchHandler, setSearchHandler] = useState(() => () => undefined);

    return (
        <NavSearchHandlerContext.Provider value={searchHandler}>
            <NavSetSearchHandlerContext.Provider value={setSearchHandler}>
                {children}
            </NavSetSearchHandlerContext.Provider>
        </NavSearchHandlerContext.Provider>
    );
};
