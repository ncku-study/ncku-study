import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createHash } from 'crypto';

import Login from '@/pages/Login';
import routerMockProps from '@/tests/utils/routerMockProps';

jest.mock('next/router', () => ({
    useRouter: () => routerMockProps,
}));

const fetchMock = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => Promise.resolve({ username: '', isLoggedIn: false }),
    })
);
global.fetch = fetchMock;

describe('Login Page', () => {
    it('renders input fields before signed in', () => {
        const session = {
            username: '',
            isLoggedIn: false,
        };
        render(<Login user={session} />);

        expect(
            screen.getByRole('textbox', { name: 'account' })
        ).toBeInTheDocument();
        expect(screen.getByLabelText('password')).toBeInTheDocument();
    });

    it('handles onSubmit and encrypts by sha-256', async () => {
        const session = {
            username: '',
            isLoggedIn: false,
        };
        render(<Login user={session} />);

        const user = {
            account: 'someone',
            password: 'MyPassword',
        };

        screen.getByRole('textbox', { name: 'account' }).value = user.account;
        screen.getByLabelText('password').value = user.password;
        fireEvent.click(screen.getByRole('button', { name: '登入' }));
        const body = JSON.parse(fetchMock.mock.calls[0][1].body);

        await waitFor(async () => {
            expect(body.account).toBe(user.account);
        });
        expect(body.password).toBe(
            createHash('sha256').update(user.password).digest('hex')
        );
    });

    it('prevents duplicate signed in', () => {
        const session = {
            username: 'someone',
            isLoggedIn: true,
        };
        render(<Login user={session} />);

        expect(
            screen.queryByRole('textbox', { name: 'account' })
        ).not.toBeInTheDocument();
        expect(
            screen.getByText(`Welcome, ${session.username}`)
        ).toBeInTheDocument();
    });
});
