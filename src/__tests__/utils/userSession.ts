import { Mode as _Mode } from '~/pages/api/user';

export const Mode = _Mode;

export const userSession = {
    username: '',
    isLoggedIn: false,
    mode: Mode.normal,
};
