import { createAction } from '@reduxjs/toolkit';
import { Major } from './major';

import { Study } from './study';

// reserve for major
export type ModalContext = {
    index: number;
    rawData?: Study | Major;
} & Partial<Study | Major>;

export const openModal = createAction('OPEN_MODAL');
export const closeModal = createAction('CLOSE_MODAL');

export const setModalContext = createAction<ModalContext>('SET_MODAL_CONTEXT');
export const clearModalContext = createAction('CLEAR_MODAL_CONTEXT');
