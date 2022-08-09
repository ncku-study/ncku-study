import { createSelector } from '@reduxjs/toolkit';

import selectSelf from '@/redux/selectors';

export const userSelector = createSelector(
    selectSelf,
    (state) => state.layout.user
);

export const modeSelector = createSelector(
    selectSelf,
    (state) => state.layout.user.mode
);
