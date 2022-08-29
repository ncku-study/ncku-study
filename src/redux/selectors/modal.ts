/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

import selectSelf from '@/redux/selectors';

const modalSelector = createSelector(selectSelf, (state) => state.modal);

export const modalStatusSelector = createSelector(
    modalSelector,
    (state) => state.isOpen
);
