import useSWR from 'swr';

import { Session } from '~/pages/api/user';

export default function useUser() {
    const { data: user, mutate: mutateUser } = useSWR<Session>('/api/user');

    return { user, mutateUser };
}
