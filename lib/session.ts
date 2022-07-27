import type { IronSessionOptions } from 'iron-session';

import type { Session } from '~/pages/api/login';

const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'my-app/session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    user: Session;
  }
}

export default sessionOptions;
