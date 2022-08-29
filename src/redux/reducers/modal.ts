import { createReducer } from '@reduxjs/toolkit';

import {
    clearModalContext,
    closeModal,
    openModal,
    setModalContext,
} from '@/redux/actions/modal';

interface ModalState {
    isOpen: boolean;
}

export const initState: ModalState = {
    isOpen: false,
};

const modalReducer = createReducer(initState, (builder) =>
    builder
        .addCase(openModal, (state) => {
            state.isOpen = true;
        })
        .addCase(closeModal, (state) => {
            state.isOpen = false;
        })
        .addCase(setModalContext, () => undefined)
        .addCase(clearModalContext, () => undefined)
);

export default modalReducer;
