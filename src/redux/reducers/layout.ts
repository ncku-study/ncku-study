import { createReducer } from '@reduxjs/toolkit';

import {
    initSidebarStatus,
    initUser,
    updateLoginStatus,
    updateMode,
    updateSidebarStatus,
} from '@/redux/actions/layout';
import { Mode, User } from '~/lib/session';

interface LayoutState {
    user: User;
    isSidebarOpen: boolean;
}

export const initState: LayoutState = {
    user: {
        username: 'anonymous',
        isLoggedIn: false,
        mode: Mode.normal,
    },
    isSidebarOpen: false,
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
        .addCase(initSidebarStatus, (state, action) => {
            state.isSidebarOpen = action.payload;
        })
        .addCase(updateSidebarStatus, (state, action) => {
            state.isSidebarOpen = action.payload;
        })
);

export default layoutReducer;
