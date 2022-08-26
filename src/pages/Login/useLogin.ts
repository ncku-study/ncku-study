import { createHash } from 'crypto';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useRef, useState } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import { User } from '~/lib/session';
import { updateLoginStatus } from '~/src/redux/actions/layout';

export default function useLogin() {
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const accountRef = useRef<HTMLInputElement | undefined>(undefined);
    const passwordRef = useRef<HTMLInputElement | undefined>(undefined);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { from } = /* location.state || */ {
        from: { pathname: '/admin' },
    };

    const handleRedirect = useCallback(() => {
        router.replace(from);
    }, [router, from]);

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
            e.preventDefault();
            setLoading(true);
            if (!accountRef.current?.value || !passwordRef.current?.value)
                return;

            const account = accountRef.current?.value;
            const password = createHash('sha256')
                .update(passwordRef.current.value)
                .digest('hex');

            const res = await fetch('/api/login', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({ account, password }),
            });

            const data: User = await res.json();

            if (!data.isLoggedIn) {
                setLoading(false);
                return;
            }
            dispatch(updateLoginStatus(data.isLoggedIn));
            handleRedirect();
        },
        [dispatch, handleRedirect]
    );

    return { loading, accountRef, passwordRef, handleSubmit };
}
