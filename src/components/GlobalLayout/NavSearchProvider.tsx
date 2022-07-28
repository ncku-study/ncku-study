import { createContext, PropsWithChildren, useState } from 'react';

// export const SetNavSearchContext = createContext(undefined);

export const NavSearchContext = createContext('');

export function NavSearchProvider({ children }: PropsWithChildren) {
  const [query, setQuery] = useState('');

  // return (
  //   <NavSearchContext.Provider value={handleSearch}>
  //     <SetNavSearchContext.Provider value={setHandleSearch}>
  //       {children}
  //     </SetNavSearchContext.Provider>
  //   </NavSearchContext.Provider>
  // );
  return (
    <NavSearchContext.Provider value={query}>
      {children}
    </NavSearchContext.Provider>
  );
}
