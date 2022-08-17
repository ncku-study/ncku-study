import { createReducer } from '@reduxjs/toolkit';

import {
    initUser,
    updateLoginStatus,
    updateMode,
} from '@/redux/actions/layout';
import { Mode, User } from '~/lib/session';

interface LayoutState {
    user: User;
}

export const initState: LayoutState = {
    user: {
        username: 'anonymous',
        isLoggedIn: false,
        mode: Mode.normal,
    },
};

const layoutReducer = createReducer(initState, (builder) =>
    builder
        .addCase(initUser, (state, action) => {
            state.user = action.payload;
        })
        .addCase(updateLoginStatus, (state, action) => {
            state.user = { ...state.user, isLoggedIn: action.payload };
        })
        .addCase(updateMode, (state, action) => {
            state.user = { ...state.user, mode: action.payload };
        })
);

export default layoutReducer;
