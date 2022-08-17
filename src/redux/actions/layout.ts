import { createAction } from '@reduxjs/toolkit';

import { Mode, User } from '~/lib/session';

export const initUser = createAction<User>('INIT_USER');
export const updateLoginStatus = createAction<boolean>('UPDATE_LOGINSTATUS');
export const updateMode = createAction<Mode>('UPDATE_MODE');
