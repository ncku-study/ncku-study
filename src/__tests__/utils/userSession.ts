import { Mode as _Mode } from '~/lib/session';

export const Mode = _Mode;

export const userSession = {
    username: 'anonymous',
    isLoggedIn: false,
    mode: Mode.normal,
};
