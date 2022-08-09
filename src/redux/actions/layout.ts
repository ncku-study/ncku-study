import { createAction } from '@reduxjs/toolkit';
import { Mode } from '~/pages/api/user';

export const initMode = createAction<Mode>('INIT_MODE');
export const updateMode = createAction<Mode>('UPDATE_MODE');
