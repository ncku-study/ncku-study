import type { IronSessionOptions } from 'iron-session';

const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'my-app/session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    user: string;
  }
}

export default sessionOptions;
