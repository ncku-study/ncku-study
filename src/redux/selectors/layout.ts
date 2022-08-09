import { createSelector } from '@reduxjs/toolkit';

import selectSelf from '@/redux/selectors';

export const userSelector = createSelector(
    selectSelf,
    (state) => state.layout.user
);

export const loginStatusSelector = createSelector(
    selectSelf,
    (state) => state.layout.user.isLoggedIn
);

export const modeSelector = createSelector(
    selectSelf,
    (state) => state.layout.user.mode
);
