import { FormEvent, useCallback } from 'react';

export default function Login() {
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
}
