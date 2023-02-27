import { createReducer } from '@reduxjs/toolkit';

import {
    clearModalContext,
    closeModal,
    ModalContext,
    openModal,
    setModalContext,
} from '@/redux/actions/modal';

interface ModalState {
    isOpen: boolean;
    context?: ModalContext;
}

export const initState: ModalState = {
    isOpen: false,
    context: undefined,
};

const modalReducer = createReducer(initState, (builder) =>
    builder
        .addCase(openModal, (state) => {
            state.isOpen = true;
        })
        .addCase(closeModal, (state) => {
            state.isOpen = false;
        })
        .addCase(setModalContext, (state, action) => {
            state.context = action.payload;
        })
        .addCase(clearModalContext, () => undefined)
);

export default modalReducer;
