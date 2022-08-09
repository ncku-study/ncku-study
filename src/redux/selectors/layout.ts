import { createSelector } from '@reduxjs/toolkit';

import selectSelf from '.';

// eslint-disable-next-line import/prefer-default-export
export const modeSelector = createSelector(
    selectSelf,
    (state) => state.layout.mode
);
