import { createReducer } from '@reduxjs/toolkit';

import {
    initSideBarStatus,
    initUser,
    updateLoginStatus,
    updateMode,
    updateSideBarStatus,
} from '@/redux/actions/layout';
import { Mode, User } from '~/lib/session';

interface LayoutState {
    user: User;
    isSideBarOpen: boolean;
}

export const initState: LayoutState = {
    user: {
        username: 'anonymous',
        isLoggedIn: false,
        mode: Mode.normal,
    },
    isSideBarOpen: false,
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
        .addCase(initSideBarStatus, (state, action) => {
            state.isSideBarOpen = action.payload;
        })
        .addCase(updateSideBarStatus, (state, action) => {
            state.isSideBarOpen = action.payload;
        })
);

export default layoutReducer;
