import { createReducer } from '@reduxjs/toolkit';

import { initUser, updateMode } from '@/redux/actions/layout';
import { Mode, User } from '~/lib/session';

interface LayoutState {
    user: User;
}

const initState: LayoutState = {
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
        .addCase(updateMode, (state, action) => {
            state.user.mode = action.payload;
        })
);

export default layoutReducer;
