import { useContext, useEffect } from 'react';
import useSWR from 'swr';

import { Session } from '~/pages/api/user';
import { GlobalLayoutContext } from '~/src/contexts/GlobalLayoutContext';

export default function useUser() {
    const { data: user, mutate: mutateUser } = useSWR<Session>('/api/user');
    const { setLoginStatus } = useContext(GlobalLayoutContext);

    useEffect(() => {
        if (!setLoginStatus) return;
        setLoginStatus(!!user?.isLoggedIn);
    }, [setLoginStatus, user?.isLoggedIn]);

    return { user, mutateUser };
}
