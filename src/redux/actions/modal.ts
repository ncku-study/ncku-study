import { createAction } from '@reduxjs/toolkit';

export const openModal = createAction('OPEN_MODAL');
export const closeModal = createAction('CLOSE_MODAL');

export const setModalContext = createAction('SET_MODAL_CONTEXT');
export const clearModalContext = createAction('CLEAR_MODAL_CONTEXT');
