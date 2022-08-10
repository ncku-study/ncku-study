import { createSelector } from '@reduxjs/toolkit';

import selectSelf from '@/redux/selectors';

const layoutSelector = createSelector(selectSelf, (state) => state.layout);

export const userSelector = createSelector(
    layoutSelector,
    (state) => state.user
);

export const loginStatusSelector = createSelector(
    layoutSelector,
    (state) => state.user.isLoggedIn
);

export const modeSelector = createSelector(
    layoutSelector,
    (state) => state.user.mode
);

export const sidebarStatusSelector = createSelector(
    layoutSelector,
    (state) => state.isSidebarOpen
);
