import { createHash } from 'crypto';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useRef, useState } from 'react';

import useUser from '~/lib/useUser';
import { Session } from '~/pages/api/user';

export default function useLogin() {
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const accountRef = useRef<HTMLInputElement | undefined>(undefined);
    const passwordRef = useRef<HTMLInputElement | undefined>(undefined);
    const { mutateUser } = useUser();
    const router = useRouter();

    const { from } = /* location.state || */ {
        from: { pathname: '/admin' },
    };

    const handleRedirect = useCallback(() => {
        router.replace(from);
    }, [router, from]);

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
            e.preventDefault();
            setLoading(true);
            if (!accountRef.current?.value || !passwordRef.current?.value)
                return;

            const account = accountRef.current?.value;
            const password = createHash('sha256')
                .update(passwordRef.current.value)
                .digest('hex');

            mutateUser(async (): Promise<Session> => {
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify({ account, password }),
                });

                const data: Session = await res.json();

                if (data.isLoggedIn) handleRedirect();
                else setLoading(false);

                return data;
            });
        },
        [handleRedirect, mutateUser]
    );

    return { loading, accountRef, passwordRef, handleSubmit };
}
