/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

import selectSelf from '@/redux/selectors';

const studySelector = createSelector(selectSelf, (state) => state.study);

export const studyDataSelector = createSelector(
    studySelector,
    (state) => state.data
);
