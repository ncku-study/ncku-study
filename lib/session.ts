import type { IronSessionOptions } from 'iron-session';

const sessionOptions: IronSessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: 'my-app/session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
};

export default sessionOptions;

export enum Mode {
    normal,
    admin,
}

export type User = {
    username: string;
    isLoggedIn: boolean;
    mode: Mode;
};

declare module 'iron-session' {
    interface IronSessionData {
        user: User;
    }
}
