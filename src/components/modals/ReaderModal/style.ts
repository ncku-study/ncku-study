/* eslint-disable import/prefer-default-export */
import type { Styles } from 'react-modal';

export const ModalStyle: Styles = {
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99,
    },
    content: {
        outline: 'none',
    },
};
