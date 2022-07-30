import type { FC } from 'react';
import { FormEvent, useCallback } from 'react';

const Login: FC<unknown> = () => {
    const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const body = {
            username: event.currentTarget.username.value,
        };

        await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <input name="username" />
        </form>
    );
};

export default Login;
