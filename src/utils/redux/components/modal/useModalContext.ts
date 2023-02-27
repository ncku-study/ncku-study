import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { modalContextSelector } from '@/redux/selectors/modal';
import { useCallback } from 'react';

import { ModalContext, setModalContext } from '@/redux/actions/modal';

function useModalContext(): [
    ModalContext | undefined,
    (context: ModalContext) => void
] {
    const dispatch = useAppDispatch();
    const modalContext = useAppSelector(modalContextSelector);

    const d = useCallback(
        (context: ModalContext) => {
            dispatch(setModalContext(context));
        },
        [dispatch]
    );

    return [modalContext, d];
}

export default useModalContext;
